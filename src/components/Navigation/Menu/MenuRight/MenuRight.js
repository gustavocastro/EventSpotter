import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'

import classes from './MenuRight.css'
import Input from '../../../UI/Input/Input';
import Button from '../../../UI/Button/Button'
import Overlay from '../../../UI/Overlay/Overlay'
import MenuToggle from './MenuToggle/MenuToggle'
import Links from '../../Links/Links'
import * as actions from '../../../../store/actions/index'

class MenuRight extends Component {
    state = {
        open: false
    }

    toggleMenuHandler = () => {
        this.setState({ open: !this.state.open })
    }

    render() {
        let inputElements = []
        let style = []

        for (let key in this.props.filters) {
            inputElements.push({
                id: key,
                config: this.props.filters[key]
            })
        }

        if (this.state.open)
            style = [classes.menuRight, classes.open]
        else
            style = [classes.menuRight, classes.close]

        return (
            <Fragment>
                <MenuToggle click={this.toggleMenuHandler} />
                <Overlay show={this.state.open} />

                <aside className={style.join(' ')}>
                    <Links 
                        style={classes} 
                        toggleMenu={this.toggleMenuHandler} />

                    <h2>Filters</h2>

                    {inputElements.map(inputEl => (
                        <Input
                            key={inputEl.id}
                            value={inputEl.config.value}
                            elementType={inputEl.config.elementType}
                            elementConfig={inputEl.config.elementConfig}
                            label={inputEl.config.label}
                            changed={(e) => this.props.onSetInputValue(e, this.props.filters, inputEl.id)} />
                    ))}
                    <Button
                        type="submit"
                        btnStyle="searchButton"
                        label="Find events"
                        clicked={() => this.props.onGetEvents(this.props.filters, 0)} />
                </aside>
            </Fragment>
        )
    }
}

const mapStateToProps = state => {
    return {
        filters: state.filters.filters
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onSetInputValue: (e, state, key) => dispatch(actions.setInputValue(e, state, key)),
        onGetEvents: (filters, page) => dispatch(actions.getEvents(filters, page))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(MenuRight))
