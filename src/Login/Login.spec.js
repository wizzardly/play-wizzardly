import React from 'react'
import { mount, shallow } from 'enzyme'

import LoginForm from 'LoginForm'

import Login from './Login'

describe('Login', () => {
  const subject = () => <Login classes={{ root: '', paper: '' }} />

  describe('when mounted', () => {
    const mounted = mount(subject())
    const html = mounted.html()

    it('contains the expected text', () => expect(html).toContain('Sign In'))
  })

  describe('when shallow rendered', () => {
    const wrapper = shallow(subject())

    it('has the expected selector', () => expect(wrapper.is('#login')).toBe(true))
    it('renders LoginForm', () => expect(wrapper.find(LoginForm)).toHaveLength(1))
  })
})
