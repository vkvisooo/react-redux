import React from 'react';
import './Banner.scss';

export const Banner = (props) => {
    return (
        <div className="banner-container">
            <h1>FEDUP WITH UNHEALTHY AND SPICY FOOD</h1>
            <img className="unhealthy-image" src="/assets/images/unhealthy-food.gif" />
        </div>
    )
}