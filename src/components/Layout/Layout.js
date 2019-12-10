import React, { Component } from 'react'

import Toolbar from '../Navigation/Toolbar/Toolbar';
import MenuLeft from '../Navigation/Menu/MenuLeft/MenuLeft';
import MenuRight from '../Navigation/Menu/MenuRight/MenuRight';

import classes from './Layout.css';

class Template extends Component {
    render() {
        return (
            <div>
                <Toolbar />
                <MenuLeft />
                <MenuRight />
                <div className={classes.content}>
                    {this.props.children}
                </div>
            </div>
        )
    }
}

export default Template