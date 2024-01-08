export const xhrGetFile = (url, callback) => {
    const xhr = new XMLHttpRequest();
  
    xhr.onload = callback;
    xhr.onerror = (evt) => console.log(`ERROR: ${evt}`);
    xhr.open("GET", url);
    xhr.send();
  };