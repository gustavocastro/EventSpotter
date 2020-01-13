import React from 'react';
import ReactDOM from 'react-dom';
import { Router } from 'react-router'
import store from './configureStore'
import { createBrowserHistory } from 'history'
import { Provider } from 'react-redux'

import App from './App'

import './index.css'
import './assets/css/datepicker-cssmodules.css'

export const history = createBrowserHistory()

const app = (
    <Provider store={store}>
        <Router history={history}>
            <App />
        </Router>
    </Provider>
)

ReactDOM.render(app, document.getElementById('root'));
