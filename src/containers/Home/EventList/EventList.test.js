import { shallow } from 'enzyme'
import configureStore from 'redux-mock-store'
import axios from '../../../axios'
import moxios from 'moxios'
import thunk from 'redux-thunk'

import * as actionTypes from '../../../store/actions/actionTypes'
import * as actions from '../../../store/actions/index'
import { eventsMock } from '../../../test/mocks/eventsMock'
import { filtersMock } from '../../../test/mocks/filtersMock'

describe('<EventList />', () => {
    const mockStore = configureStore([thunk])
    const store = mockStore({ events: {} })

    beforeEach(function () {
        moxios.install(axios)
    })
    
    afterEach(function () {
        moxios.uninstall(axios)
    })

    test('creates GET_EVENTS_SUCCESS after successfuly fetching events', () => {
        moxios.wait(() => {
            const request = moxios.requests.mostRecent()
            request.respondWith({
              status: 200,
              response: eventsMock,
            })
        })

        const events = eventsMock._embedded.events
        const expectedActions = [
            { type: actionTypes.GET_EVENTS_START },
            { type: actionTypes.GET_EVENTS_SUCCESS, events, page: {} },
        ]

        return store.dispatch(actions.getEvents(filtersMock.filters))
                    .then(() => {
                        expect(store.getActions()).toEqual(expectedActions)
                    })
                    .catch(err => {
                        throw new Error(err)
                    })
    })
})