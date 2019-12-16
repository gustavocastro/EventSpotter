import axios from '../../axios'
import * as actionTypes from './actionTypes'

const loadCategoriesSuccess = (categories) => {
    let categoriesFiltered = categories.filter(category => {
        return category.segment !== undefined && category.segment.name !== "Undefined"
    })
    let categoriesArray = [{id: '', value: ''}]

    categoriesFiltered.map(category => {
        categoriesArray.push({
            id: category.segment.id,
            value: category.segment.name
        })
    })

    return {
        type: actionTypes.LOAD_CATEGORIES_SUCCESS,
        categories: categoriesArray
    }
}

const loadCategoriesFail = (error) => {
    return {
        type: actionTypes.LOAD_CATEGORIES_FAIL,
        error
    }
}

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

const filterEventsStart = () => {
    return {
        type: actionTypes.FILTER_EVENTS_START
    }
}

const filterEventsSuccess = (events) => {
    return {
        type: actionTypes.FILTER_EVENTS_SUCCESS,
        events
    }
}

const filterEventsFail = (error) => {
    return {
        type: actionTypes.FILTER_EVENTS_FAIL,
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

export const loadCategories = () => {
    return dispatch => {
        axios.get('/classifications')
             .then(res => {
                 dispatch(loadCategoriesSuccess(res.data._embedded.classifications))
             })
             .catch(err => {
                 console.log(err)
                 dispatch(loadCategoriesFail(err))
             })
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

export const filterEvents = (params) => {
    return dispatch => {
        dispatch(filterEventsStart())
        let urlParams = `?city=${params.location.value}&startDateTime=${params.startDate.value}&endDateTime=${params.endDate.value}&classificationName=${params.category.value}`
        axios.get('/events'+urlParams)
             .then(res => {
                dispatch(filterEventsSuccess(res.data._embedded.events))
             })
             .catch(err => {
                 console.log(err)
                 dispatch(filterEventsFail(err))
             })
    }
}