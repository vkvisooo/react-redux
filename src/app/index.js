// import React from "react";
// import { render } from "react-dom";

// import { User } from './components/User';
// import { Main } from './components/Main';

// class App extends React.Component {
//     constructor() {
//         super();
//         this.state = {
//             username: "Max"
//         };
//     }

//     changeUsername(newName) {
//         this.setState({
//             username: newName
//         });
//     }

//     render() {
//         return (
//             <div className="container">
//                 <Main changeUsername={this.changeUsername.bind(this)} />
//                 <User username={this.state.username} />
//             </div>
//         );
//     }
// }

// render(<App />, window.document.getElementById('app'));

import { createStore, combineReducers, applyMiddleware } from 'redux';
import { createLogger } from "redux-logger";

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

store.subscribe(() => {
    console.log("updated store", store.getState())
})

store.dispatch({
    type: "ADD",
    payload: 10
})
store.dispatch({
    type: "SUBTRACT",
    payload: 1
})
store.dispatch({
    type: "AGE",
    payload: 26
})
store.dispatch({
    type: "NAME",
    payload: "Vishal Kashyap"
})