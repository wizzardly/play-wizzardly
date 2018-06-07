import React from 'react'
import { shallow } from 'enzyme'

import Site from 'Site'
import WithSession from 'WithSession'

import Application from './Application.js'

describe('Application', () => {
  const subject = () => <Application classes={{}} />

  describe('when shallow rendered', () => {
    const wrapper = shallow(subject())

    it('has the expected selector', () => expect(wrapper.is('#application')).toBe(true))
    it('renders WithSession with site content', () => {
      expect(wrapper.find(WithSession).props().children).toEqual(shallow(<Site />)[Symbol.for('enzyme.__unrendered__')])
    })
  })
})
