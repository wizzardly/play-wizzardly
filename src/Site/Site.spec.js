import React from 'react'
import { shallow } from 'enzyme'

import Login from 'Login'
import Masthead from 'Masthead'
import Dashboard from 'Dashboard'
import Mastfoot from 'Mastfoot'

import Site from './Site'

describe('Site', () => {
  const subject = props => <Site {...props} />

  describe('when unauthenticated', () => {
    const wrapper = shallow(subject({ authentication: { signedIn: false } }))

    it('returns Login', () => expect(wrapper.is(Login)).toBe(true))
  })

  describe('when authenticated', () => {
    const wrapper = shallow(subject({ authentication: { signedIn: true } }))

    it('has the expected selector', () => expect(wrapper.is('#site')).toBe(true))
    it('renders Masthead', () => expect(wrapper.find(Masthead)).toHaveLength(1))
    it('renders Dashboard', () => expect(wrapper.find(Dashboard)).toHaveLength(1))
    it('renders Mastfoot', () => expect(wrapper.find(Mastfoot)).toHaveLength(1))
  })
})
