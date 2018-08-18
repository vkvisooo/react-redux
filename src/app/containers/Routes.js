export const Routes = () => {
    return (
        < Router history={hashHistory} >
            <Switch>
                <Route path={"/home"} component={App}>
                </Route>
                <Route path={"/user/id"} component={Test} />
            </Switch>
        </Router >
    )
}