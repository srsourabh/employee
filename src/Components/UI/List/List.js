import React from 'react';

import classes from './List.css';

const button = (props) => (
    <div className = {classes.Center}>
        <li>
            {props.children}
        </li>
    </div>
) 

export default button;