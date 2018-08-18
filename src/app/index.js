import React from "react";
import { render } from "react-dom";
import { BrowserRouter as Router, Route, hashHistory, Switch } from "react-router-dom";
import { Provider } from 'react-redux';
import App from './containers/App';
import store from './store';
import { Test } from './containers/Test';

render(
    <Provider store={store}>
        <Router history={hashHistory}>
            <Switch>
                <Route path={"/home"} component={App}>
                </Route>
                <Route path={"/user/id"} component={Test} />
            </Switch>
        </Router>
        {/* <App /> */}
    </Provider>,
    document.getElementById('app')
)
