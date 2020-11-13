import React from 'react';

import classes from './Buttons.css';

const button = (props) => (
    <div className = {classes.Center}>
        <button 
        className = {[classes.Button, classes[props.btnType]].join(' ')}
        onClick = {props.clicked}>
            {props.children}
    </button>
    </div>
) 

export default button;