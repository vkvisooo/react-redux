import { createStore, combineReducers, applyMiddleware } from "redux"
import { createLogger } from 'redux-logger';
import mathReducer from './reducers/mathReducer';
import nameReducer from './reducers/nameReducer';

const Store = createStore(
    combineReducers({
        mathReducer,
        nameReducer
    }),
    {},
    applyMiddleware(createLogger())
);
export default Store;