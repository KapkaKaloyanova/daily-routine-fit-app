import { isBase64, fixBase64URL, isHttpUrl, isValidUrl } from './validateUrls'; // Import your existing validation functions
import getDirectImageUrl from './directImgUrlDriveLink'; // Import your URL fixer function

const processImageUrl = (imageUrl) => {
  if (!imageUrl) return "/images/default-image.png"; // Return default image if no URL

  let processedImageUrl = "/images/default-image.png"; // Fallback image URL

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
    processedImageUrl = getDirectImageUrl(imageUrl); // Process Google Drive URL if needed
  }

  return processedImageUrl;
};

export default processImageUrl;