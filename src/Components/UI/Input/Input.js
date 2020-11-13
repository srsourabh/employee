import React from 'react';

import classes from './Input.css';

const input = (props) => {
    const inputClasses = [classes.InputElement];
    const inputElement = <input
                            type = {props.type}
                            placeholder = {props.placeholder}
                            className={inputClasses.join(' ')}
                            onChange = {props.changed}/>
    return(
        <div className = {classes.Input}>
            <label className = {classes.label}>{props.label}</label>
            {inputElement}
        </div>
    );
}

export default input;