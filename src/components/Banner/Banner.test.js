import React from 'react'
import { shallow } from 'enzyme'

import Banner from './Banner'

describe('<Banner />', () => {
    let banner
    const mockProps = {
        images: [{ url: 'mockUrl', ratio: '3_2', width: 305 }],
        title: 'mockTitle',
        dates: { 
            start: { localDate: new Date() } 
        },
        details: {
            venues: [{
                id: '1',
                name: 'venueMock',
                city: { name: 'cityMock' },
                country: { countryCode: 'MC' }
            }]
        }
    }

    beforeAll(() => {
        banner = shallow(<Banner {...mockProps} />)
    })

    it('should have the event image', () => {
        const img = banner.find('img')
        expect(img.length).toEqual(1)
    })

    it('should have a h3 title', () => {
        const header = banner.find('h3')
        expect(header.length).toEqual(1)
    })
})