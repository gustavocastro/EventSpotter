import React from 'react'

import classes from './Modal.css'
import If from '../../../hoc/If';
import Button from '../Button/Button'

const Modal = (props) => {
    return (
        <If condition={props.showModal}>
            <div className={classes.overlay}>
                <div className={classes.modal}>
                    <h3>{props.title}</h3>
                    <p>{props.message}</p>
                </div>
                <Button
                    type="button"
                    btnStyle="cancel"
                    label="Close"
                    clicked={props.handleModal} />
            </div>
        </If>
    )
}

export default Modal
