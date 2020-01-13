import { createStore, combineReducers, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'

import filtersReducer from './store/reducers/filters'
import eventReducer from './store/reducers/event'
import menuReducer from './store/reducers/menu'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const rootReducer = combineReducers({
    filters: filtersReducer,
    event: eventReducer,
    menu: menuReducer
})

const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)))

export default store