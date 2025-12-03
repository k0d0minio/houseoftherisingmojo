import sharp from "sharp";
import { readFile } from "fs/promises";
import { join } from "path";
import type { ImageProps } from "./types";

const cache = new Map<string, string>();

export default async function getBase64ImageUrl(
  image: ImageProps,
): Promise<string> {
  const cacheKey = image.filename;
  let url = cache.get(cacheKey);
  if (url) {
    return url;
  }

  const imagePath = join(process.cwd(), "public", "gallery", image.filename);
  let imageBuffer: Buffer;
  
  try {
    imageBuffer = await readFile(imagePath);
  } catch (error) {
    // If file can't be read, return a placeholder
    console.warn(`Could not read ${image.filename} for blur placeholder`);
    return "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q==";
  }

  // Resize to 8px width, convert to JPEG, and get base64
  let resizedBuffer: Buffer;
  try {
    resizedBuffer = await sharp(imageBuffer)
      .resize(8, null, { withoutEnlargement: true })
      .jpeg({ quality: 70 })
      .toBuffer();
  } catch (error) {
    // If sharp can't process the file (e.g., HEIC), return a placeholder
    console.warn(`Could not process ${image.filename} for blur placeholder`);
    return "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q==";
  }

  url = `data:image/jpeg;base64,${resizedBuffer.toString("base64")}`;
  cache.set(cacheKey, url);
  return url;
}
