import React from 'react'
import { configure, shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import each from 'jest-each'

import Input from './Input'

configure({adapter: new Adapter()})

describe('<Input />', () => {
    const types = [null, 'input', 'select']
    
    each(types).describe('elementType="%s"', (type) => {
        if (type === 'select') {
            const config = { options: [{ value: 'mock', description: 'mock' }] }
            const wrapper = shallow(<Input elementType={type} elementConfig={config} />)
            const trendline = wrapper.find(type)

            it('should have onChange property', () => {
                expect(trendline.props()).toHaveProperty('onChange')
            })

            it('should have elementConfig options mapped as select options', () => {
                expect(trendline.find('option').length).toBe(1)
            })
        }
        else {
            const wrapper = shallow(<Input elementType={type} />)
            const trendline = wrapper.find(type || 'input')

            it('should have onChange property', () => {
                expect(trendline.props()).toHaveProperty('onChange')
            })
        }
    })
})