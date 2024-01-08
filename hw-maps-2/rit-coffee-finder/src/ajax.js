function downloadFile(url, callbackRef)
{
    const xhr = new XMLHttpRequest();

    // Set 'onerror' handler
    xhr.onerror = (e) => console.log("error");

    // Set 'onload' handler
    xhr.onload = (e) => {
        const headers = e.target.getAllResponseHeaders();
        const jsonString = e.target.response;
        console.log(`headers = ${headers}`);
        console.log(`jsonString = ${jsonString}`);
        callbackRef(jsonString);
    };

    // Open the connection using the HTTP GET method
    xhr.open("GET", url);

    // Send the request
    xhr.send();
}

export {downloadFile};