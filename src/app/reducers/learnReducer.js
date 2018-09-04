const learnReducer = (state = { learnReducer: null }, action) => {
    switch (action.type) {
        case 'LEARN_ACTION':
            state = {
                ...state,
                learnReducer: action.payload
            }
            break;
    }
    return state;
}
export default learnReducer;
