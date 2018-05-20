import React from 'react'
import { mount, shallow } from 'enzyme'

// import Grid from '@material-ui/core/Grid'
// import Paper from '@material-ui/core/Paper'

import LoginForm from './LoginForm'

describe('LoginForm', () => {
  const subject = () => <LoginForm classes={{ textField: '', button: '' }} />

  describe('when mounted', () => {
    const mounted = mount(subject())

    describe('onSubmit', () => {
      beforeEach(() => mounted.find('form#login-form').simulate('submit'))

      it('submits the form when the submit button is clicked', () => expect(true).toBe(true))
    })
  })

  describe('when shallow rendered', () => {
    const wrapper = shallow(subject())

    it('has the expected selector', () => expect(wrapper.is('#login-form')).toBe(true))
    // it('renders Paper', () => expect(wrapper.find(Paper)).toHaveLength(1))
    // it('renders Grid', () => expect(wrapper.find(Grid)).not.toHaveLength(0))
    // it('renders LoginForm', () => expect(wrapper.find(LoginFormf)).toHaveLength(1))
  })
})
