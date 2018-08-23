import React from "react";
import { render } from "react-dom";
import { BrowserRouter as Router, Route, hashHistory, Switch } from "react-router-dom";
import { Provider } from 'react-redux';
import App from './containers/App';
import store from './store';
import { Test } from './containers/Test';
import { Routes } from './Routes';

render(
    <Provider store={store}>
        {Routes}
        {/* <App /> */}
    </Provider>,
    document.getElementById('app')
)
