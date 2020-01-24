import React from 'react'
import configureStore from 'redux-mock-store'
import { shallow } from 'enzyme'
import { setInputValue } from '../../store/actions/filters'

import Home from './Home'
import EventList from './EventList/EventList'

describe('<Home />', () => {
    const mockStore = configureStore()
    const initialState = {
        filters: {
            filters: {
                location: { value: ''}
            }
        }
    }
    let store, wrapper

    beforeAll(() => {
        store = mockStore(initialState)
        wrapper = shallow(<Home store={store} />).dive()
    })

    test('renders title with "anywhere" without state', () => {
        expect(wrapper.dive().find('span').text()).toContain('anywhere')
    })

    test('renders title with state if location is set', () => {
        const { event, filters, key} = {
            event: { target: { value: 'Mock Location' }},
            filters: initialState.filters.filters,
            key: 'location'
        }
        setInputValue(event, filters, key)

        expect(wrapper.dive().find('span').text()).toContain(event.target.value)
    })

    test('renders <EventList />', () => {
        const eventList = wrapper.dive().find(EventList).first()
        expect(eventList.exists()).toBeTruthy()
    })
})