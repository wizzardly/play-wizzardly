import React from 'react'
import faker from 'faker'
import { mount, shallow } from 'enzyme'
import { sessionInitialState } from 'data/initialState'

import SignIn from 'SignIn'

import WithSession from './WithSession'

describe('WithSession', () => {
  const uuid = faker.random.uuid()
  const content = <div>{uuid}</div>
  const subject = props => <WithSession {...props}>{content}</WithSession>

  describe('without a session', () => {
    const wrapper = shallow(subject({ dispatch: () => {}, session: { ...sessionInitialState } }))

    it('returns SignIn', () => expect(wrapper.is(SignIn)).toBe(true))
  })

  describe('with a session', () => {
    const mounted = mount(subject({ dispatch: () => {}, session: { ...sessionInitialState, token: 'token' } }))
    const html = mounted.html()

    it('renders the given content', () => expect(html).toContain(uuid))
  })
})
