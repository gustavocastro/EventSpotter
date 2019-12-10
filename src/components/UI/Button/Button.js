import React from 'react'

import classes from './Button.css';

const Button = (props) => {
    let btnClasses = [classes.button, classes[props.btnStyle]]

    return (
        <div>
            <button
                type={props.type}
                className={btnClasses.join(' ')}
                onClick={props.clicked}>
                    {props.label}
            </button>
        </div>
    )
}

export default Button
