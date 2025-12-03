import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useRef } from "react";
import { readdir } from "fs/promises";
import { join } from "path";
import sharp from "sharp";
import Bridge from "../components/Icons/Bridge";
import Modal from "../components/Modal";
import getBase64ImageUrl from "../utils/generateBlurPlaceholder";
import type { ImageProps } from "../utils/types";
import { useLastViewedPhoto } from "../utils/useLastViewedPhoto";

const Gallery: NextPage = ({ images }: { images: ImageProps[] }) => {
  const router = useRouter();
  const { photoId } = router.query;
  const [lastViewedPhoto, setLastViewedPhoto] = useLastViewedPhoto();

  const lastViewedPhotoRef = useRef<HTMLAnchorElement>(null);

  useEffect(() => {
    // This effect keeps track of the last viewed photo in the modal to keep the index page in sync when the user navigates back
    if (lastViewedPhoto && !photoId) {
      lastViewedPhotoRef.current.scrollIntoView({ block: "center" });
      setLastViewedPhoto(null);
    }
  }, [photoId, lastViewedPhoto, setLastViewedPhoto]);

  return (
    <>
      <Head>
        <title>Gallery - House of the Rising Mojo</title>
        <meta
          property="og:image"
          content={`${process.env.NEXT_PUBLIC_APP_URL}/og-image.png`}
        />
        <meta
          name="twitter:image"
          content={`${process.env.NEXT_PUBLIC_APP_URL}/og-image.png`}
        />
      </Head>
      <main className="mx-auto max-w-[1960px] p-4 pt-20 md:pt-24">
        {photoId && (
          <Modal
            images={images}
            onClose={() => {
              setLastViewedPhoto(photoId);
            }}
          />
        )}
        <div className="columns-1 gap-4 sm:columns-2 xl:columns-3 2xl:columns-4">
          <div className="after:content relative mb-5 flex h-[400px] sm:h-[500px] md:h-[600px] lg:h-[629px] flex-col items-center justify-end gap-3 md:gap-4 overflow-hidden rounded-lg bg-white/10 px-4 sm:px-6 pb-12 sm:pb-16 pt-48 sm:pt-56 md:pt-64 text-center text-white shadow-highlight after:pointer-events-none after:absolute after:inset-0 after:rounded-lg after:shadow-highlight lg:pt-0">
            <div className="absolute inset-0 flex items-center justify-center opacity-20">
              <span className="flex max-h-full max-w-full items-center justify-center">
                <Bridge />
              </span>
              <span className="absolute left-0 right-0 bottom-0 h-[300px] sm:h-[350px] md:h-[400px] bg-gradient-to-b from-black/0 via-black to-black"></span>
            </div>
            <h1 className="mt-4 sm:mt-6 md:mt-8 mb-2 md:mb-4 text-sm sm:text-base font-bold uppercase tracking-widest">
              Gallery
            </h1>
            <p className="text-sm sm:text-base max-w-[40ch] text-white/75 sm:max-w-[32ch] px-2">
              Explore the beauty and community of House of the Rising Mojo through our photo collection.
            </p>
          </div>
          {images.map(({ id, filename, blurDataUrl, width, height }) => (
            <Link
              key={id}
              href={`/gallery?photoId=${id}`}
              as={`/p/${id}`}
              ref={id === Number(lastViewedPhoto) ? lastViewedPhotoRef : null}
              shallow
              className="after:content group relative mb-5 block w-full cursor-zoom-in after:pointer-events-none after:absolute after:inset-0 after:rounded-lg after:shadow-highlight"
            >
              <Image
                alt="Gallery photo"
                className="transform rounded-lg brightness-90 transition will-change-auto group-hover:brightness-110"
                style={{ transform: "translate3d(0, 0, 0)" }}
                placeholder="blur"
                blurDataURL={blurDataUrl}
                src={`/gallery/${filename}`}
                width={width}
                height={height}
                sizes="(max-width: 640px) 100vw,
                  (max-width: 1280px) 50vw,
                  (max-width: 1536px) 33vw,
                  25vw"
              />
            </Link>
          ))}
        </div>
      </main>
    </>
  );
};

export default Gallery;

export async function getStaticProps() {
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

  // Generate blur placeholders
  const blurImagePromises = reducedResults.map((image: ImageProps) => {
    return getBase64ImageUrl(image);
  });
  const imagesWithBlurDataUrls = await Promise.all(blurImagePromises);

  for (let i = 0; i < reducedResults.length; i++) {
    reducedResults[i].blurDataUrl = imagesWithBlurDataUrls[i];
  }

  return {
    props: {
      images: reducedResults,
    },
  };
}

