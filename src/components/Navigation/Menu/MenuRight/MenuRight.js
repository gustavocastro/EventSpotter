import React, { Component } from 'react'
import { connect } from 'react-redux'

import classes from './MenuRight.css'
import Input from '../../../UI/Input/Input';
import Button from '../../../UI/Button/Button'
import * as actions from '../../../../store/actions/index'

class MenuRight extends Component {
    componentDidMount() {
        this.props.onLoadCategories()
    }

    render() {
        let inputElements = []
        for (let key in this.props.filters) {
            inputElements.push({
                id: key,
                config: this.props.filters[key]
            })
        }

        return (
            <aside className={classes.menuRight}>
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
                    clicked={() => this.props.onFilterEvents(this.props.filters)} />
            </aside>
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
        onLoadCategories: () => dispatch(actions.loadCategories()),
        onSetInputValue: (e, state, key) => dispatch(actions.setInputValue(e, state, key)),
        onFilterEvents: (filters) => dispatch(actions.filterEvents(filters))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(MenuRight)
