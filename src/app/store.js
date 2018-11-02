import { createStore, combineReducers, applyMiddleware } from "redux"
import { createLogger } from 'redux-logger';
import mathReducer from './reducers/mathReducer';
import nameReducer from './reducers/nameReducer';
import Promise from 'redux-promise-middleware';
import serviceReducer from './reducers/serviceReducer';
import requestReducer from './reducers/requestReducer';
import ToffeeReducer from './reducers/toffeeReducer';
import learnReducer from "./reducers/learnReducer";

const Store = createStore(
    combineReducers({
        mathReducer,
        nameReducer,
        serviceReducer,
        requestReducer,
        ToffeeReducer,
        learnReducer
    }),
    {},
    applyMiddleware(Promise())
);
export default Store;

// above code for combine reducers is shorthand syntax actually it look something like this
// combineReducers({
//     mathReducer:mathReducer,
//     nameReducer:nameReducer,
//     serviceReducer:serviceReducer,
//     requestReducer:requestReducer
// })