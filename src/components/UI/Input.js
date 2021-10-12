import classes from './Input.module.css';
import React from 'react';

// {...props.input} give all the property in object to the input as property i.e. - type = "text"   if props.input has {type: "text"}
const Input = React.forwardRef((props, ref) => {
    return <div className={classes.input}>
        <label htmlFor={props.input.id}>{props.label}</label>
        <input ref={ref} {...props.input} />
    </div>
})

export default Input;