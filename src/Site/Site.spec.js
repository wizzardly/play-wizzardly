import React from 'react'
import { shallow } from 'enzyme'
import { authenticationInitialState } from 'data/initialState'

import SignIn from 'SignIn'
import Header from 'Header'
import Layout from 'Layout'

import Site from './Site'

describe('Site', () => {
  const subject = (authentication = {}, classes = {}) => <Site authentication={authentication} classes={classes} />

  describe('when unauthenticated', () => {
    const wrapper = shallow(subject({ ...authenticationInitialState, signedIn: false }))

    it('returns SignIn', () => expect(wrapper.is(SignIn)).toBe(true))
  })

  describe('when authenticated', () => {
    const wrapper = shallow(subject({ ...authenticationInitialState, signedIn: true }))

    it('has the expected selector', () => expect(wrapper.is('#site')).toBe(true))
    it('renders Header', () => expect(wrapper.find(Header)).toExist())
    it('renders Layout', () => expect(wrapper.find(Layout)).toExist())
  })
})
