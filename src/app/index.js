import React from "react";
import { render } from "react-dom";

import { createStore, combineReducers, applyMiddleware } from 'redux';
import { createLogger } from "redux-logger";
import { Provider } from 'react-redux';
import App from './components/App';


const initialState = {
    result: 1,
    lastValues: []
}

const mathReducer = (state = initialState, action) => {
    switch (action.type) {
        case "ADD":
            state = {
                ...state,
                result: state.result + action.payload,
                lastValues: [...state.lastValues, action.payload]

            }
            break;
        case "SUBTRACT":
            state = {
                ...state,
                result: state.result - action.payload,
                lastValues: [action.payload]
            }

            break;
    }
    return state;
}
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
        case "NAME":
            state = {
                ...state,
                name: action.payload,
            }

            break;
    }
    return state;
}

const store = createStore(
    combineReducers({ mathReducer, nameReducer }),
    {},
    applyMiddleware(createLogger())
);

// store.subscribe(() => {
//     console.log("updated store", store.getState())
// })


render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('app')
)
