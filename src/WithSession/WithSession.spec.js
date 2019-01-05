import React from 'react'
import faker from 'faker'
import axios from 'axios'
import { mount, shallow } from 'enzyme'
import { sessionState } from 'States'

import SignIn from 'SignIn'

import WithSession from './WithSession'

describe('WithSession', () => {
  const uuid = faker.random.uuid()
  const content = <div>{uuid}</div>
  const subject = props => <WithSession {...props}>{content}</WithSession>

  describe('without a session', () => {
    const wrapper = shallow(subject({ dispatch: () => {}, session: { ...sessionState } }))

    it('returns SignIn', () => expect(wrapper.is(SignIn)).toBe(true))
  })

  describe('with a session', () => {
    const mounted = mount(subject({ dispatch: () => {}, session: { ...sessionState, token: 't0k3n' } }))
    const html = mounted.html()

    it('renders the given content', () => expect(html).toContain(uuid))
    it('changes axios default header', () => {
      expect(axios.defaults.headers.common.Authorization).toEqual('Bearer t0k3n')
    })
  })
})
