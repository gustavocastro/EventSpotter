import * as actionTypes from '../actions/actionTypes'

const initialState = {
    filters: {
        location: {
            elementType: 'input',
            elementConfig: {
                type: 'text',
                placeholder: 'Where?'
            },
            value: '',
            label: 'The ideal location'
        },
        startDate: {
            elementType: 'input',
            elementConfig: {
                type: 'date',
                placeholder: 'Start Date'
            },
            value: '',
            label: 'From'
        },
        endDate: {
            elementType: 'input',
            elementConfig: {
                type: 'date',
                placeholder: 'End Date'
            },
            value: '',
            label: 'To'
        },
        category: {
            elementType: 'select',
            elementConfig: {
                options: [
                    { value: '', description: '' },
                    { value: 'miscellaneous', description: 'Miscellaneous' },
                    { value: 'sports', description: 'Sports' },
                    { value: 'music', description: 'Music' },
                    { value: 'arts & theatre', description: 'Arts & Theatre' },
                    { value: 'film', description: 'Film' }
                ]
            },
            value: '',
            label: 'Your mood asks for:'
        }
    },
    events: [],
    filtered: false,
    loading: false,
    error: null,
    currentPage: 0,
    totalPages: 1
}

const setInputValue = (state, action) => {
    return { ...state, filters: action.filters }
}

const getEventsStart = (state) => {
    return { ...state, loading: true }
}

const getEventsSuccess = (state, action) => {
    return { 
        ...state,
        filtered: true, 
        loading: false, 
        events: action.events,
        currentPage: action.page.number,
        totalPages: action.page.totalPages 
    }
}

const getEventsFail = (state, action) => {
    return { 
        ...state,
        filtered: true, 
        loading: false, 
        events: [], 
        error: action.error 
    }
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.SET_INPUT_VALUE:
            return setInputValue(state, action)
        case actionTypes.GET_EVENTS_START:
            return getEventsStart(state)
        case actionTypes.GET_EVENTS_SUCCESS:
            return getEventsSuccess(state, action)
        case actionTypes.GET_EVENTS_FAIL:
            return getEventsFail(state, action)
        default:
            return state
    }
}

export default reducer