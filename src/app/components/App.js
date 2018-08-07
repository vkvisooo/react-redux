import React from "react";
import { connect } from 'react-redux';

import { User } from './User';
import { Main } from './Main';

class App extends React.Component {
    render() {
        return (
            <div className="container">
                <Main changeUsername={(name) => this.props.setName(name)} />
                <User username={this.props.user.name} />
            </div>
        );
    }
}
const mapStateToProps = (state) => {
    return {
        user: state.nameReducer,
        math: state.mathReducer,
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        setName: (name) => {
            dispatch({
                type: 'NAME',
                payload: name
            })
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(App);