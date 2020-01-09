import * as actionTypes from './actionTypes'

const toggleMenu = (open) => {
    return {
        type: actionTypes.TOGGLE_MENU,
        open 
    }
}

export const toggleMenuRight = (open) => {
    return dispatch => {
        dispatch(toggleMenu(open))
    }
}