import React from 'react';
import "./app.scss";
import { Header } from '../components/Header/Header';
import { Banner } from '../components/Banner/Banner';


export class Landing extends React.Component {
    render() {
        console.log(this.props)
        return (
            <div className="Main-container">
                <Header></Header>
                <Banner></Banner>
            </div>
        )
    }
}