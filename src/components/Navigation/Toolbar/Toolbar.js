import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import * as actions from '../../../store/actions/index'
import { ArrowBack } from '@material-ui/icons'
import If from '../../../hoc/If'

import MenuToggle from './MenuToggle/MenuToggle'
import classes from './Toolbar.css'

class Toolbar extends Component {
    static defaultProps = {
        location: window.location.pathname
    }

    shouldComponentUpdate(nextProps) {
        let shouldUpdate = false
        
        if (this.props.location.pathname !== nextProps.location.pathname)
            shouldUpdate = true
        else 
            window.history.replaceState(null, null, "/")
        
        return shouldUpdate
    }

    goBackHandler = () => {
        this.props.history.goBack()
    }

    render() {
        return (
            <header className={classes.toolbar}>
                <div
                    className={classes.arrowBack}
                    onClick={this.goBackHandler}>
                        <If condition={this.props.location.state}>
                            <ArrowBack />
                        </If>
                </div>
                <div className={classes.brand}>
                    <h3>Event Spotter</h3>
                </div>
                <nav className={classes.toggle}>
                    <MenuToggle
                        click={() => this.props.onMenuClick(!this.props.open)} />
                </nav>
            </header>
        )
    }
}

const mapStateToProps = state => {
    return {
        open: state.menu.open
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onMenuClick: (open) => dispatch(actions.toggleMenuRight(open)) 
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Toolbar))
