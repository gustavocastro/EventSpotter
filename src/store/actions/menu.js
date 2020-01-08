import * as actionTypes from './actionTypes'

const toggleMenu = (open) => {
    return {
        type: actionTypes.TOGGLE_MENU,
        open 
    }
}

export const toggleMenuRight = (state) => {
    return dispatch => {
        dispatch(toggleMenu(state.open))
    }
}