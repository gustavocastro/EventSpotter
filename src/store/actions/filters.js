import axios from '../../axios'
import { history } from '../../index'
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
                 console.log(err)
                 dispatch(getEventsFail(err))
             })
    }
}