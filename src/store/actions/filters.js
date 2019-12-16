import axios from '../../axios'
import * as actionTypes from './actionTypes'

const getEventsStart = () => {
    return {
        type: actionTypes.GET_EVENTS_START
    }
}

const getEventsSuccess = (events) => {
    return {
        type: actionTypes.GET_EVENTS_SUCCESS,
        events
    }
}

const getEventsFail = (error) => {
    return {
        type: actionTypes.GET_EVENTS_FAIL,
        error
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
                 dispatch(getEventsSuccess(res.data._embedded.events))
             })
             .catch(err => {
                 console.log(err)
                 dispatch(getEventsFail(err))
             })
    }
}