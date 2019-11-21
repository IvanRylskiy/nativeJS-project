export function request(url, fnDraw) {
    let request = new XMLHttpRequest();
    request.open('GET', url);
    request.onreadystatechange = function() {
        if(request.status == 200 && request.readyState == XMLHttpRequest.DONE) {
            let data = JSON.parse(request.responseText);
            fnDraw(data);
        }
    };
    request.send();
}