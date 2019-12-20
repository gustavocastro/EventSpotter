import axios from '../../axios'
import { history } from '../../index'
import * as actionTypes from './actionTypes'

const getEventsStart = () => {
    return {
        type: actionTypes.GET_EVENTS_START
    }
}

const getEventsSuccess = (events, page) => {
    let updatedPage = { ...page }
    if (updatedPage.totalPages > 55)
        updatedPage.totalPages = 55

    return {
        type: actionTypes.GET_EVENTS_SUCCESS,
        events,
        page: updatedPage
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

export const getEvents = (filters, page) => {
    return dispatch => {
        dispatch(getEventsStart())
        const startDate = filters.startDate.value ? (filters.startDate.value + 'T00:00:00Z') : ''
        const endDate = filters.endDate.value ? (filters.endDate.value + 'T00:00:00Z') : ''        
        const params = `?size=18&page=${page}&city=${filters.location.value}&startDateTime=${startDate}&endDateTime=${endDate}&classificationName=${filters.category.value}`

        axios.get('/events'+params)
             .then(res => {
                 dispatch(getEventsSuccess(res.data._embedded.events, res.data.page))
                 history.push('/')
             })
             .catch(err => {
                 Promise.reject(err)
                 dispatch(getEventsFail(err))
             })
    }
}