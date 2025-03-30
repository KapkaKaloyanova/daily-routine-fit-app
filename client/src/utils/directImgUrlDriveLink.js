// Function to convert Google Drive URL to direct image URL
export default function getDirectImageUrl(url){
  if (!url) {
    return null;
  }

  // Regex to extract file ID from Google Drive URL
  const regex = /\/file\/d\/([^\/]+)\//; // Refined to capture the ID more reliably
  const match = url.match(regex);

  if (match && match[1]) {
    // Ensure the ID is properly encoded for the URL
    const fileId = encodeURIComponent(match[1]);
    return `https://drive.google.com/uc?export=view&id=${fileId}`;
  }

  return url; // Return original URL if not a Google Drive link
};