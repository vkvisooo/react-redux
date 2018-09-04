import { requestCall } from './service';

export const fakeRequestAction = (requestBody) => {
    var fakeRequest = requestCall(requestBody)
    return {
        type: "FAKE_REQUEST",
        payload: fakeRequest
    }
}
export function axiosRequest(requestBody) {
    var httpRequest = requestCall(requestBody)
    console.log(httpRequest)
    return {
        type: 'AXIOS_REQUEST',
        payload: httpRequest,
    }

}