export function httpRequest() {
    let request = () => {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                let result = { 'service_request': 'HTTP', 'loader': true }
                resolve(result);
            }, 3000)
        });
    };
    let another_request = (loader) => {
        return new Promise((resolve, reject) => {
            resolve(loader);
        });
    };
    return {
        type: 'HTTP_REQUEST',
        payload: request().then((result) => {
            if (result.loader) {
                return another_request(true);
            }
        }).then((result) => {
            return result;
        })
    }
}