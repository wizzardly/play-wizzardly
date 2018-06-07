import React from 'react'
import faker from 'faker'
import { mount, shallow } from 'enzyme'
import { authenticationInitialState } from 'data/initialState'

import SignIn from 'SignIn'

import WithAuthentication from './WithAuthentication'

describe('WithAuthentication', () => {
  const uuid = faker.random.uuid()
  const content = <div>{uuid}</div>
  const subject = props => <WithAuthentication {...props}>{content}</WithAuthentication>

  describe('when unauthenticated', () => {
    const wrapper = shallow(subject({ authentication: { ...authenticationInitialState, signedIn: false } }))

    it('returns SignIn', () => expect(wrapper.is(SignIn)).toBe(true))
  })

  describe('when authenticated', () => {
    const mounted = mount(subject({ authentication: { ...authenticationInitialState, signedIn: true } }))
    const html = mounted.html()

    it('renders the given content', () => expect(html).toContain(uuid))
  })
})
