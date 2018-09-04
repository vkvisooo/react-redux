import axios from 'axios';

export const requestCall = (requestBody) => {
    return new Promise((resolve, reject) => {
        var request = {
            url: requestBody.url,
            method: requestBody.method || 'GET',
            headers: requestBody.headers || {},
        };
        if (requestBody.data) {
            request.data = JSON.stringify(requestBody.data) || "";
        }
        console.log(request)
        request.headers['Content-Type'] = 'application/json';
        axios(request).then(response => { resolve({ ...response, loader: true }) }).then(resolve.data).catch(error => {
            reject(error.response ? error.response : error)
        });
    });
}