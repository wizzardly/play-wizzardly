import React from 'react'
import { shallow } from 'enzyme'

import Login from 'Login'
import Dashboard from 'Dashboard'

import { Site } from './index.js'

describe('Site', () => {
  const subject = props => <Site {...props} />

  describe('when shallow rendered and unauthenticated', () => {
    const wrapper = shallow(subject({ authentication: { signedIn: false } }))

    it('has the expected selector', () => expect(wrapper.is('#site')).toBe(true))
    it('renders Login', () => expect(wrapper.find(Login).length).toBe(1))
  })

  describe('when shallow rendered and authenticated', () => {
    const wrapper = shallow(subject({ authentication: { signedIn: true } }))

    it('has the expected selector', () => expect(wrapper.is('#site')).toBe(true))
    it('renders Login', () => expect(wrapper.find(Dashboard).length).toBe(1))
  })
})
