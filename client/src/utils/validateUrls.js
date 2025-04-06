// Check if the string is a valid Base64 URL
const isBase64 = (str) => {
    return (
      str &&
      (str.startsWith("data:image/jpeg;base64,") ||
        str.startsWith("data:image/png;base64,"))
    );
  };
  
// fix Base64 URL 
const fixBase64URL = (url) => {
  return url.replace(/[\n\r]/g, ''); // removes new lines and 
};

  // Check if the string is a valid HTTP(S) URL
  const isHttpUrl = (str) => {
    const pattern = /^https?:\/\/[^ "]+$/;
    return pattern.test(str);
  };
  
  // Check if the string is a valid URL
  const isValidUrl = (str) => {
    try {
      new URL(str);
      return true;
    } catch (_) {
      return false;
    }
  };
  
  export { isBase64, fixBase64URL, isHttpUrl, isValidUrl };