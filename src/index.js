import React from 'react';
import ReactDOM from 'react-dom';
import { Router } from 'react-router'
import { createStore, combineReducers, applyMiddleware, compose } from 'redux'
import { createBrowserHistory } from 'history'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'

import './index.css';
import App from './App';
import filtersReducer from './store/reducers/filters'
import eventReducer from './store/reducers/event'

export const history = createBrowserHistory()

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const rootReducer = combineReducers({
    filters: filtersReducer,
    event: eventReducer
})

const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)))

const app = (
    <Provider store={store}>
        <Router history={history}>
            <App />
        </Router>
    </Provider>
)

ReactDOM.render(app, document.getElementById('root'));
