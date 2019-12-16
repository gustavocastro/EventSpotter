import React from 'react'

import classes from './Input.css';

const Input = (props) => {
    let inputElement = ''

    switch (props.elementType) {
        case 'input': 
            inputElement = <input
                                {...props.elementConfig}
                                value={props.value}
                                onChange={props.changed} />
            break
        case 'select':
            inputElement = (
                <select
                    value={props.value}
                    onChange={props.changed}>
                        {props.elementConfig.options.map(option => (
                            <option
                                key={option.id}
                                value={option.value} >
                                    {option.value}
                            </option>
                        ))}
                </select>
            )
            break
        default:
                inputElement = <input
                                    {...props.elementConfig}
                                    value={props.value}
                                    onChange={props.changed} />
            break
    }

    return (
        <div className={classes.inputGroup}>
            <label className={classes.inputLabel}>
                <small>{props.label}</small>
            </label>
            {inputElement}
        </div>
    )
}

export default Input
