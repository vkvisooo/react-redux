const requestReducer = (state = { fakeRequest: null, axiosRequest: null }, action) => {
    switch (action.type) {
        case "FAKE_REQUEST_FULFILLED":
            state = {
                ...state,
                fakeRequest: action.payload,

            }
            break;

        case "AXIOS_REQUEST_FULFILLED":
            state = {
                ...state,
                axiosRequest: action.payload,
            }
            break;
    }
    return state;
}
export default requestReducer;