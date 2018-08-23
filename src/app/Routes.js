import React from 'react';
import { BrowserRouter as Router, Route, hashHistory, Switch } from "react-router-dom";
import App from './containers/App';
import { Test } from './containers/Test';


export const Routes = (
    < Router history={hashHistory} >
        <Switch>
            <Route path={"/home"} component={App}>
            </Route>
            <Route path={"/user"} component={Test} />
        </Switch>
    </Router >
)
