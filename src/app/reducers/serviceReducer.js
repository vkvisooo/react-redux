const serviceReducer = (state = {
    httpRequest: null
}, action) => {
    switch (action.type) {
        case "HTTP_REQUEST_FULFILLED":
            state = {
                ...state,
                httpRequest: action.payload,
            }
            break;


        default:
            break;
    }
    return state;
}
export default serviceReducer;