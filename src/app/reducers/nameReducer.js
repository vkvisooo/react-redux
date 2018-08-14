const nameReducer = (state = {
    name: "vishal",
    age: "17"
}, action) => {
    switch (action.type) {
        case "AGE":
            state = {
                ...state,
                age: action.payload,
            }
            break;
        case "NAME_FULFILLED":
            state = {
                ...state,
                name: action.payload,
            }

            break;
    }
    return state;
}
export default nameReducer;