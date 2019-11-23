export function makeRequest(url, method) {
    return new Promise(function(resolve, reject) {
        let request = new XMLHttpRequest();
        request.open(method, url);
        request.onload = function() {
            if (request.status == 200 && request.readyState == XMLHttpRequest.DONE) {
                let data = JSON.parse(request.responseText);
                resolve(data);
            } else {
                reject({
                    status: request.status,
                    statusText: request.statusText,
                    readyState: request.readyState
                });
            }
        };
        request.send();
    });
}