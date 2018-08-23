import React from "react";
import "./main.scss";

export class Main extends React.Component {
    render() {
        return (
            <div className="new-background">
                <div className="row">
                    <div className="col-xs-12">
                        <h1>The Main Page</h1>
                    </div>
                </div>
                <div className="row">
                    <div className="col-xs-12">
                        <button
                            className="btn btn-primary"
                            onClick={() => this.props.changeUsername('Rupali')}>Change the Username
                            </button>
                    </div>
                </div>
            </div>
        );
    }
}