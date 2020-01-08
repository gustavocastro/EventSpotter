import * as actionTypes from '../actions/actionTypes'

const initialState = {
    open: false
}

toggleMenu = (state, action) => {
    return { ...state, open: action.open }
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.TOGGLE_MENU:
            return toggleMenu(state, action)
        default:
            return state
    }
}

export default reducer