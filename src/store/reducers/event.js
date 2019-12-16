import * as actionTypes from '../actions/actionTypes'

const initialState = {
    loading: false,
    eventFetched: false,
    error: null,
    eventDetails: []
}

const getEventDetailsStart = (state) => {
    return { ...state, loading: true }
}

const getEventDetailsSuccess = (state, action) => {
    return { 
        ...state, 
        loading: false,
        eventFetched: true, 
        error: null,
        eventDetails: action.eventDetails
    }
}

const getEventDetailsFail = (state, action) => {
    return { 
        ...state, 
        loading: false,
        eventFetched: true,
        error: action.error, 
        eventDetails: []
    }
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.GET_EVENT_DETAILS_START:
            return getEventDetailsStart(state)
        case actionTypes.GET_EVENT_DETAILS_SUCCESS:
            return getEventDetailsSuccess(state, action)
        case actionTypes.GET_EVENT_DETAILS_FAIL:
            return getEventDetailsFail(state, action)
        default:
            return state
    }
}

export default reducer