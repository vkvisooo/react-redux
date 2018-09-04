import React from 'react';
import { BrowserRouter as Router, Route, hashHistory, Switch } from "react-router-dom";
import App from './containers/App';
import { Landing } from './containers/Landing';
import { StopWatch } from './containers/StopWatch';
import Form from './containers/Form';


export const Routes = (
    < Router history={hashHistory} >
        <Switch>
            <Route exact path={"/"} component={Landing}>
            </Route>
            <Route path={"/home"} component={App}>
            </Route>
            <Route path={"/form"} component={Form}>
            </Route>
            <Route path={"/stopwatch"} component={StopWatch}>
            </Route>
        </Switch>
    </Router >
)
