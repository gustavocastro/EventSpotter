import * as actionTypes from './actionTypes'
import axios from '../../axios'

const getEventDetailsStart = () => {
    return {
        type: actionTypes.GET_EVENT_DETAILS_START
    }
}

const getEventDetailsSuccess = (eventDetails) => {
    return {
        type: actionTypes.GET_EVENT_DETAILS_SUCCESS,
        eventDetails
    }
}

const getEventDetailsFail = (error) => {
    return {
        type: actionTypes.GET_EVENT_DETAILS_FAIL,
        error
    }
}

export const getEventDetails = (id) => {
    return dispatch => {
        dispatch(getEventDetailsStart())
        axios.get('/events/'+id)
             .then(res => {
                 dispatch(getEventDetailsSuccess(res.data))
             })
             .catch(err => {
                 console.log(err)
                 dispatch(getEventDetailsFail(err))
             })
    }
}