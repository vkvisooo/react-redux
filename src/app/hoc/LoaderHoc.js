import React, { Component } from 'react';

const LoaderHoc = (httprequest) => (WrappedComponent) => {
    let loader = () => {
        return (
            <div>
                <img src={'/assets/images/loader.gif'} />
            </div>
        )
    }
    return class LoaderHoc extends Component {
        render() {
            console.log(this.props.httprequest);
            console.log("check props is coming or note")
            return this.props.httprequest ? <WrappedComponent {...this.props} /> : loader();
        }
    }

}

export default LoaderHoc;