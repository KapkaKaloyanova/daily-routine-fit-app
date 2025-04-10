import { isBase64, fixBase64URL, isHttpUrl, isValidUrl } from './validateUrls'; 
import getDirectImageUrl from './directImgUrlDriveLink';

const processImageUrl = (imageUrl) => {
  if (!imageUrl) return "/images/default-image.jpg"; // Return default image if no URL

  let processedImageUrl = "/images/default-image.jpg"; // Fallback image URL

  // Check if it's Base64
  if (isBase64(imageUrl)) {
    processedImageUrl = fixBase64URL(imageUrl); // Process Base64 image URL
  } 
  // Check if it's a valid HTTP(S) URL
  else if (isHttpUrl(imageUrl)) {
    processedImageUrl = imageUrl; // Use HTTP(S) URL directly
  } 
  // Check if it's a valid URL (e.g., Google Drive link)
  else if (isValidUrl(imageUrl)) {
    processedImageUrl = getDirectImageUrl(imageUrl); // Process Google Drive URL

    if (!processedImageUrl) {
      processedImageUrl = "/images/default-image.jpg"; // if check failed return default image
    }
  }

  return processedImageUrl;
};

export default processImageUrl;