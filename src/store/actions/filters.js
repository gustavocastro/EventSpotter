import axios from '../../axios'
import * as actionTypes from './actionTypes'

const getEventsStart = () => {
    return {
        type: actionTypes.GET_EVENTS_START
    }
}

export const setInputValue = (event, filters, key) => {
    let updatedFilters = { ...filters }
    updatedFilters[key].value = event.target.value

    return {
        type: actionTypes.SET_INPUT_VALUE,
        filters: updatedFilters
    }
}

export const getEvents = () => {
    return dispatch => {
        dispatch(getEventsStart())
    }
}