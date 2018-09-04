import { requestCall } from './service';

export const ToffeeAction = (request) => {
    console.log(request)
    var call_request = requestCall(request);
    return {
        type: 'CHECK_USER',
        payload: call_request
    }
}