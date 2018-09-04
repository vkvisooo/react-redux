import React from "react";
import LoaderHoc from "../hoc/LoaderHoc";

class User extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            httprequest: props.httprequest
        }
    }
    click() {
        this.setState({
            httprequest: "harkuch"
        })
    }
    render() {
        console.log(this.props.httprequest + "Props request")
        console.log(this.state.httprequest + "state request")
        return (
            <div>
                <div className="row">
                    <div className="col-xs-12">
                        <h1>The User Page</h1>
                    </div>
                </div>
                <div className="row">
                    <div className="col-xs-12">
                        <p>User Name: {this.props.username}</p>
                    </div>
                    <div>
                        HTTP REQUEST : {JSON.stringify(this.props.httprequest)}
                    </div>
                    <button onClick={() => this.click()}>Click me</button>
                </div>
            </div>
        );
    }
}
export default LoaderHoc('httprequest')(User);
