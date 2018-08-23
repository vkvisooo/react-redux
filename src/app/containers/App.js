import React from "react";
import { connect } from 'react-redux';

import { User } from '../components/User';
import { Main } from '../components/Main';
import { Link } from "react-router-dom";
import { setName } from '../actions/userActions';
import serviceReducer from '../reducers/serviceReducer';
import { httpRequest } from '../actions/serviceActions';
import requestReducer from '../reducers/requestReducer';
import { fakeRequestAction, axiosRequest } from '../actions/requestActions';



const pStyle = {
    height: '100vh',
    justifyContent: 'center',
    display: 'flex',
    textAlign: 'center',
    alignItems: 'center'
};
const requestBody1 = {
    url: "https://jsonplaceholder.typicode.com/posts",
    method: "POST",
    data: {
        title: 'foo',
        body: 'bar',
        userId: 1
    },
    headers: {}
}
const requestBody2 = {
    url: "https://jsonplaceholder.typicode.com/posts",
    method: "GET",
    headers: {}
}
class App extends React.Component {
    constructor() {
        super();
        this.state = {
            loader: false,
        }
    }

    componentWillMount() {
        // this.props.setName();
        this.props.httpRequest();
        this.props.axiosRequest(requestBody1);
        this.props.fakeRequest(requestBody2);
    }

    render() {
        let loader = this.props.request.fakeRequest ? this.props.request.fakeRequest.loader : false;
        console.log(this.props.request.fakeRequest ? this.props.request.fakeRequest.length : "unknown")

        return (
            <div className="container" style={pStyle}>
                <p><Link to={"/user"}>Link user</Link></p>
                <p><a href="/user">Anchor User</a></p>
                <img style={{ display: loader ? 'none' : 'block' }} src={'/assets/images/loader.gif'} />
                <div style={{ display: loader ? 'block' : 'none' }} onClick={this.props.axiosrequest}>
                    <Main changeUsername={(name) => this.props.setName(name)} />
                    <User username={this.props.user.name} httprequest={this.props.http.httpRequest} />
                </div>
            </div>
        );
    }
}
const mapStateToProps = (state) => {
    //console.log(state.serviceReducer)
    return {
        user: state.nameReducer,
        math: state.mathReducer,
        http: state.serviceReducer,
        request: state.requestReducer,
    }
}
const mapDispatchToProps = (dispatch) => {
    // console.log(httpRequest())
    return {
        setName: (name) => {
            dispatch(setName(name))
        },
        httpRequest: () => {
            dispatch(httpRequest())
        },
        fakeRequest: (request) => dispatch(fakeRequestAction(request)),
        axiosRequest: (request) => dispatch(axiosRequest(request))

    }
}
export default connect(mapStateToProps, mapDispatchToProps)(App);