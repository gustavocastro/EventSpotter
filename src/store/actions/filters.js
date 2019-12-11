import axios from '../../axios'
import * as actionTypes from './actionTypes'

const getEventsStart = () => {
    return {
        type: actionTypes.GET_EVENTS_START
    }
}

const getEventSuccess = (events) => {
    return {
        type: actionTypes.GET_EVENTS_SUCCESS,
        events: events
    }
}

const getEventFail = (error) => {
    return {
        type: actionTypes.GET_EVENTS_FAIL,
        error: error
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
        axios.get('/events')
             .then(res => {
                 console.log(res.data._embedded.events)
                 dispatch(getEventSuccess(res.data._embedded.events))
             })
             .catch(err => {
                 console.log(err)
                 dispatch(getEventFail(err))
             })
    }
}