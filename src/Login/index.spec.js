import React from 'react'
import { mount, shallow } from 'enzyme'

import Grid from '@material-ui/core/Grid'
import Paper from '@material-ui/core/Paper'

// TODO: Fix this!
import LoginFormf from './LoginForm'

import { Login } from './index.js'

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
    it('renders Paper', () => expect(wrapper.find(Paper)).toHaveLength(1))
    it('renders Grid', () => expect(wrapper.find(Grid)).not.toHaveLength(0))
    it('renders LoginForm', () => expect(wrapper.find(LoginFormf)).toHaveLength(1))
  })
})
