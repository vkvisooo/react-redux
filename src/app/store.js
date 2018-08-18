import { createStore, combineReducers, applyMiddleware } from "redux"
import { createLogger } from 'redux-logger';
import mathReducer from './reducers/mathReducer';
import nameReducer from './reducers/nameReducer';
import Promise from 'redux-promise-middleware';
import serviceReducer from './reducers/serviceReducer';
import requestReducer from './reducers/requestReducer';

const Store = createStore(
    combineReducers({
        mathReducer,
        nameReducer,
        serviceReducer,
        requestReducer
    }),
    {},
    applyMiddleware(createLogger(), Promise())
);
export default Store;

// above code for combine reducers is shorthand syntax actually it look something like this
// combineReducers({
//     mathReducer:mathReducer,
//     nameReducer:nameReducer,
//     serviceReducer:serviceReducer,
//     requestReducer:requestReducer
// })