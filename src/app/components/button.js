import React from 'react';

export const Button = (props) => {
    return (
        <button className="btn btn-primary" onClick={props.click}>{props.name}</button>
    )
}