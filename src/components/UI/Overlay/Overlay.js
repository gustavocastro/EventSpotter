import React from 'react'

import classes from './Overlay.css'
import If from '../../../hoc/If';

const Overlay = (props) => {
    return (
        <If condition={props.show}>
            <div className={classes.overlay} />
        </If>
    )
}

export default Overlay
