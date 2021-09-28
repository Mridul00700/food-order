import classes from './Input.module.css';

// {...props.input} give all the property in object to the input as property i.e. - type = "text"   if props.input has {type: "text"}
const Input = props => {
    return <div className={classes.input}>
        <label htmlFor={props.input.id}>{props.label}</label>
        <input {...props.input} />
    </div>
}

export default Input;