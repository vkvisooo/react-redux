import React, { ProtoTypes } from "react";
import { connect } from 'react-redux';

import { Main } from '../components/Main';
import { Link } from "react-router-dom";
import { setName } from '../actions/userActions';
import { httpRequest } from '../actions/serviceActions';
import { fakeRequestAction, axiosRequest } from '../actions/requestActions';
import User from "../components/User";


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
    url: "https://jsonplaceholder.typicode.com/comments",
    method: "GET",
    headers: {}
}
class App extends React.Component {
    constructor(props) {
        super(props);
        console.log(props)
        this.state = {
            loader: false,
            check: "it has the default value"
        }
    }

    componentWillMount() {
        // this.props.setName();
        this.props.httpRequest();
        this.props.axiosRequest(requestBody1);
        this.props.fakeRequest(requestBody2);
    }
    componentDidMount() {
        console.log("component didi mount");
        this.setState({
            check: "value has been changed",
        })
        console.log(this.state.check);
    }
    render() {
        // let loader = this.props.request.fakeRequest ? this.props.request.fakeRequest.loader : false;
        // console.log(this.props.request.fakeRequest ? this.props.request.fakeRequest.length : "unknown")

        return (
            <div className="container" style={pStyle}>
                <p><Link to={"/user"}>Link user</Link></p>
                <p><a href="/user">Anchor User</a></p>
                {/* <img style={{ display: loader ? 'none' : 'block' }} src={'/assets/images/loader.gif'} /> */}
                <div>
                    {/* <Main name="name" changeUsername={(name) => this.props.setName(name)} /> */}
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