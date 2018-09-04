import React, { Fragment } from 'react';


export class ElapsedTime extends React.Component {

    constructor() {
        super();
        this.time_array = [];
        this.counter = 0;
    }

    shouldComponentUpdate(nextProps) {
        if (nextProps.elapsedTime != this.props.elapsedTime) {
            return true;
        }
        else {
            return false;
        }
    }

    checkCondition() {
        if (this.props.elapsedTime) {
            let seconds = this.props.elapsedTime - this.props.prevElapsedTime;
            this.counter++;
            this.time_array.push(
                <div key={this.counter}>
                    <h4>Elapsed Time</h4>
                    <h3>
                        {Math.floor(seconds / 3600)}:
                        {Math.floor((seconds % 3600) / 60)}:
                        {Math.floor(seconds % 3600 % 60)}
                    </h3>
                </div>
            )
            return this.time_array;
        }
    }
    render() {
        console.log("elapse time render")
        return (
            <div>
                {this.checkCondition()}
            </div >
        )
    }
}