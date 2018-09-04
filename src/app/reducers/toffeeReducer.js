const ToffeeReducer = (state = { checkUser: null }, action) => {
    switch (action.type) {
        case 'CHECK_USER_FULFILLED':
            state = {
                ...state,
                checkUser: action.payload
            }
            break;
    }
    return state;
}
export default ToffeeReducer;