import type { GetStaticProps, NextPage } from "next";
import Head from "next/head";
import { useRouter } from "next/router";
import { readdir } from "fs/promises";
import { join } from "path";
import sharp from "sharp";
import Carousel from "../../components/Carousel";
import getBase64ImageUrl from "../../utils/generateBlurPlaceholder";
import type { ImageProps } from "../../utils/types";

const Home: NextPage = ({ currentPhoto }: { currentPhoto: ImageProps }) => {
  const router = useRouter();
  const { photoId } = router.query;
  let index = Number(photoId);

  const currentPhotoUrl = `${process.env.NEXT_PUBLIC_APP_URL || ""}/gallery/${currentPhoto.filename}`;

  return (
    <>
      <Head>
        <title>Next.js Conf 2022 Photos</title>
        <meta property="og:image" content={currentPhotoUrl} />
        <meta name="twitter:image" content={currentPhotoUrl} />
      </Head>
      <main className="mx-auto max-w-[1960px] p-4">
        <Carousel currentPhoto={currentPhoto} index={index} />
      </main>
    </>
  );
};

export default Home;

export const getStaticProps: GetStaticProps = async (context) => {
  const galleryPath = join(process.cwd(), "public", "gallery");
  const files = await readdir(galleryPath);

  // Filter for image files
  const imageExtensions = [".jpg", ".jpeg", ".png", ".gif", ".webp", ".heic"];
  const imageFiles = files.filter((file) => {
    const ext = file.toLowerCase().substring(file.lastIndexOf("."));
    return imageExtensions.includes(ext);
  });

  // Sort files by filename (descending)
  imageFiles.sort((a, b) => b.localeCompare(a));

  let reducedResults: ImageProps[] = [];

  for (let i = 0; i < imageFiles.length; i++) {
    const filename = imageFiles[i];
    const imagePath = join(galleryPath, filename);
    const format = filename.substring(filename.lastIndexOf(".") + 1).toLowerCase();
    
    // Get image metadata using sharp, with error handling for unsupported formats
    let metadata;
    try {
      metadata = await sharp(imagePath).metadata();
    } catch (error) {
      // If sharp can't read the file (e.g., HEIC without proper support), use defaults
      console.warn(`Could not read metadata for ${filename}, using defaults`);
      metadata = { width: 1920, height: 1280 };
    }
    
    reducedResults.push({
      id: i,
      height: metadata.height || 480,
      width: metadata.width || 720,
      filename: filename,
      format: format,
    });
  }

  const currentPhoto = reducedResults.find(
    (img) => img.id === Number(context.params?.photoId),
  );

  if (!currentPhoto) {
    return {
      notFound: true,
    };
  }

  currentPhoto.blurDataUrl = await getBase64ImageUrl(currentPhoto);

  return {
    props: {
      currentPhoto: currentPhoto,
    },
  };
};

export async function getStaticPaths() {
  const galleryPath = join(process.cwd(), "public", "gallery");
  const files = await readdir(galleryPath);

  // Filter for image files
  const imageExtensions = [".jpg", ".jpeg", ".png", ".gif", ".webp", ".heic"];
  const imageFiles = files.filter((file) => {
    const ext = file.toLowerCase().substring(file.lastIndexOf("."));
    return imageExtensions.includes(ext);
  });

  let fullPaths = [];
  for (let i = 0; i < imageFiles.length; i++) {
    fullPaths.push({ params: { photoId: i.toString() } });
  }

  return {
    paths: fullPaths,
    fallback: false,
  };
}
