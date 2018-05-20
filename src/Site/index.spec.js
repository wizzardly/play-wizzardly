import React from 'react'
import { shallow } from 'enzyme'

import Login from 'Login'
import Dashboard from 'Dashboard'

import { Site } from './index.js'

describe('Site', () => {
  const subject = props => <Site {...props} />

  describe('when unauthenticated', () => {
    const wrapper = shallow(subject({ authentication: { signedIn: false } }))

    it('returns Login', () => expect(wrapper.is(Login)).toBe(true))
  })

  describe('when authenticated', () => {
    const wrapper = shallow(subject({ authentication: { signedIn: true } }))

    it('has the expected selector', () => expect(wrapper.is('#site')).toBe(true))
    it('renders Dashboard', () => expect(wrapper.find(Dashboard)).toHaveLength(1))
  })
})
