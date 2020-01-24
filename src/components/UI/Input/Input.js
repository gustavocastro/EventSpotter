import React from 'react'

import DatePicker from 'react-datepicker'
import classes from './Input.css'

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
                    id={props.elementConfig.id}
                    onChange={props.changed}>
                        {props.elementConfig.options.map(option => (
                            <option
                                key={option.value}
                                value={option.value} >
                                    {option.description}
                            </option>
                        ))}
                </select>
            )
            break
        case 'datePicker':
            inputElement = (
                <DatePicker
                    selected={props.value}
                    onChange={props.changed}
                    dateFormat="MMMM d, yyyy"
                    showPopperArrow={false}
                    id={props.elementConfig.id} />
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
            <label className={classes.inputLabel} htmlFor={props.elementConfig.id}>
                <small>{props.label}</small>
            </label>
            {inputElement}
        </div>
    )
}

export default Input
