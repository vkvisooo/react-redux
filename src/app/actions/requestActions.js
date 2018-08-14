import { requestCall } from './service';

export const fakeRequestAction = (requestBody) => {
    // let fakeRequest = new Promise((resolve, reject) => {
    //     var xhr = new XMLHttpRequest();
    //     let URL = "https://jsonplaceholder.typicode.com/comments";
    //     let methodType = "GET"
    //     xhr.open(methodType, URL, true);
    //     xhr.send();
    //     xhr.onreadystatechange = function () {
    //         if (xhr.readyState === 4) {
    //             if (xhr.status === 200) {
    //                 var resp = xhr.responseText;
    //                 var respJson = JSON.parse(resp);
    //                 resolve({ ...respJson, loader: true });
    //             } else {
    //                 reject(xhr.status);
    //             }
    //         } else {
    //         }
    //     }

    // });
    var fakeRequest = requestCall(requestBody)
    return {
        type: "FAKE_REQUEST",
        payload: fakeRequest
    }
}
export function axiosRequest(requestBody) {
    // console.log(requestBody)
    var httpRequest = requestCall(requestBody)
    console.log(httpRequest)
    return {
        type: 'AXIOS_REQUEST',
        payload: httpRequest,
    }

}