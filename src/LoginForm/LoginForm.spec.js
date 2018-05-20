import React from 'react'
import { mount, shallow } from 'enzyme'
import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import faker from 'faker'
import { SIGN_IN_SUBMIT } from 'Actions'

import LoginForm from './LoginForm'

const mockStore = configureMockStore([thunk])

describe('LoginForm', () => {
  const subject = dispatch => <LoginForm dispatch={dispatch} classes={{ textField: '', button: '' }} />

  describe('when mounted', () => {
    const mounted = mount(subject(() => {}))

    it('renders an email input', () => expect(mounted.find('input#login-form-email')).toHaveLength(1))
    it('renders an password input', () => {
      expect(mounted.find('input#login-form-password[type="password"]')).toHaveLength(1)
    })
    it('renders a submit button', () => {
      expect(mounted.find('button#login-form-submit[type="submit"]')).toHaveLength(1)
    })

    describe('submit button', () => {
      describe('when no email or password is entered', () => {

      })

      describe('when only an email is entered', () => {

      })

      describe('when only a password is entered', () => {

      })

      describe('when both a username and password are entered', () => {

      })
    })
  })

  describe('when mounted with a store', () => {
    describe('onSubmit', () => {
      it('dispatches the expected action', () => {
        const store = mockStore()
        const mounted = mount(subject(store.dispatch))

        const email = faker.internet.email()
        const password = faker.internet.password()

        mounted.setState({ email, password })

        mounted.find('form#login-form').simulate('submit')

        expect(store.getActions()).toEqual([{ type: SIGN_IN_SUBMIT, auth: { email, password } }])
      })
    })
  })

  describe('when shallow rendered', () => {
    const wrapper = shallow(subject(() => {}))

    it('has the expected selector', () => expect(wrapper.is('#login-form')).toBe(true))
  })
})
