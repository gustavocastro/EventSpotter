import axios from '../../axios'
import { history } from '../../index'
import { ISODateForAPIParams } from '../../utilities/formatDates'
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

    if (key === 'startDate' || key === 'endDate') 
        updatedFilters[key].value = event
    else
        updatedFilters[key].value = event.target.value

    return {
        type: actionTypes.SET_INPUT_VALUE,
        filters: updatedFilters
    }
}

export const getEvents = (filters, page) => {
    return dispatch => {
        dispatch(getEventsStart())
        const startDate = ISODateForAPIParams(filters.startDate.value)
        const endDate = ISODateForAPIParams(filters.endDate.value)    
        const params = `?size=18&page=${page}&city=${filters.location.value}&startDateTime=${startDate}&endDateTime=${endDate}&classificationName=${filters.category.value}`

        axios.get('/events'+params)
             .then(res => {
                 let events = []
                 if (res.data._embedded)
                    events = res.data._embedded.events

                 dispatch(getEventsSuccess(events, res.data.page))
                 history.push('/')
             })
             .catch(err => {
                 Promise.reject(err)
                 dispatch(getEventsFail(err))
             })
    }
}