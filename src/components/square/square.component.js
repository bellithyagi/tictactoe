import React from 'react';
import './square.css';

const Square = (props) => {
    console.log(props);
    return (
        <div className="square" id={props.id}>
        </div>
    )
}

export default Square;