import React, { Component } from 'react';
import { Button } from '../components/button';
import { ElapsedTime } from '../components/ElapsedTime';


export class StopWatch extends Component {
    constructor() {
        super()
        this.state = {
            time: 0,
            elapsedTime: 0
        }
        this.timer_interval;
        this.counter;
    }
    start() {
        if (this.counter) {
            return;
        }
        this.timer_interval = setInterval(() => {
            var time = this.state.time;
            time += 1;
            this.setState({
                time: time,
            })
        }, 1000);
        this.counter = true;
    }
    pause() {
        clearInterval(this.timer_interval);
        this.counter = false;
    }
    stop() {
        this.setState({
            prevElapsedTime: this.state.elapsedTime,
            elapsedTime: this.state.time
        })
    }

    render() {

        return (
            <div>
                <h1>Stop Watch:</h1>
                <h4>{Math.floor(this.state.time / 3600)}:{Math.floor((this.state.time % 3600) / 60)}:{Math.floor(this.state.time % 3600 % 60)}</h4>
                <Button click={() => this.start()} name="Start" />&nbsp;
                <Button click={() => this.pause()} name="Pause" />&nbsp;
                <Button click={() => this.stop()} name="Stop" />&nbsp;
                <ElapsedTime elapsedTime={this.state.elapsedTime} prevElapsedTime={this.state.prevElapsedTime} />
            </div>
        )
    }
}