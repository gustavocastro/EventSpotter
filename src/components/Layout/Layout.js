import React, { Component } from 'react'
import { connect } from 'react-redux'

import Toolbar from '../Navigation/Toolbar/Toolbar';
import MenuLeft from '../Navigation/Menu/MenuLeft/MenuLeft';
import MenuRight from '../Navigation/Menu/MenuRight/MenuRight';

import classes from './Layout.css';
import Spinner from '../UI/Spinner/Spinner';

class Template extends Component {
    render() {
        let content = this.props.children
        if (this.props.filtersLoading || this.props.eventLoading)
            content = <Spinner />

        return (
            <div>
                <Toolbar />
                <MenuLeft />
                <MenuRight />
                <div className={classes.content}>
                    {content}
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        filtersLoading: state.filters.loading,
        eventLoading: state.event.loading
    }
}

export default connect(mapStateToProps)(Template)