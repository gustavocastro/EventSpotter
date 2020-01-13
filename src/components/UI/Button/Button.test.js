import React from 'react'
import { shallow } from 'enzyme'

import Button from './Button'

describe('<Button />', () => {
    it('should trigger button click', () => {
        const mockCallBack = jest.fn()

        const button = shallow(<Button clicked={mockCallBack} />)
        button.find('button').simulate('click')
        expect(mockCallBack.mock.calls.length).toBe(1)
    })

    it('should have label', () => {
        const mockLabel = 'Click me!'

        const button = shallow(<Button label={mockLabel} />)
        expect(button.text()).toEqual(mockLabel)
    })
});