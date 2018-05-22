import React from 'react'
import { shallow } from 'enzyme'

import SignIn from 'SignIn'
import Header from 'Header'
import Layout from 'Layout'
import Footer from 'Footer'

import Site from './Site'

describe('Site', () => {
  const subject = props => <Site {...props} />

  describe('when unauthenticated', () => {
    const wrapper = shallow(subject({ authentication: { signedIn: false } }))

    it('returns SignIn', () => expect(wrapper.is(SignIn)).toBe(true))
  })

  describe('when authenticated', () => {
    const wrapper = shallow(subject({ authentication: { signedIn: true } }))

    it('has the expected selector', () => expect(wrapper.is('#site')).toBe(true))
    it('renders Header', () => expect(wrapper.find(Header)).toHaveLength(1))
    it('renders Layout', () => expect(wrapper.find(Layout)).toHaveLength(1))
    it('renders Footer', () => expect(wrapper.find(Footer)).toHaveLength(1))
  })
})
