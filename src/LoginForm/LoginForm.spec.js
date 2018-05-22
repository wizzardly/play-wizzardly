import React from 'react'
import { mount, shallow } from 'enzyme'
import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import faker from 'faker'
import { SIGN_IN_STARTED } from 'Actions'

import LoginForm from './LoginForm'

const mockStore = configureMockStore([thunk])

describe('LoginForm', () => {
  const subject = dispatch => <LoginForm dispatch={dispatch} classes={{ textField: '', button: '' }} />

  describe('when mounted', () => {
    let mounted

    beforeEach(() => mounted = mount(subject(() => {})))

    it('renders an email input', () => expect(mounted.find('input#login-form-email')).toHaveLength(1))
    it('renders an password input', () => {
      expect(mounted.find('input#login-form-password[type="password"]')).toHaveLength(1)
    })

    describe('submit button', () => {
      const submitButton = () => mounted.find('button#login-form-submit[type="submit"]')
      const setValues = (email, password) => {
        mounted.find('input#login-form-email').simulate('change', { target: { value: email } })
        mounted.find('input#login-form-password').simulate('change', { target: { value: password } })
      }

      it('renders', () => expect(submitButton()).toHaveLength(1))

      describe('when no email or password is entered', () => {
        beforeEach(() => setValues('', ''))

        it('is disabled', () => expect(submitButton()).toBeDisabled(true))
      })

      describe('when only an email is entered', () => {
        beforeEach(() => setValues(faker.internet.email(), ''))

        it('is disabled', () => expect(submitButton()).toBeDisabled(true))
      })

      describe('when only a password is entered', () => {
        beforeEach(() => setValues('', faker.internet.password()))

        it('is disabled', () => expect(submitButton()).toBeDisabled())
      })

      describe('when both a username and password are entered', () => {
        beforeEach(() => setValues(faker.internet.email(), faker.internet.password()))

        it('is enabled', () => expect(submitButton()).not.toBeDisabled())
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

        expect(store.getActions()).toEqual([{ type: SIGN_IN_STARTED }])
      })
    })
  })

  describe('when shallow rendered', () => {
    const wrapper = shallow(subject(() => {}))

    it('has the expected selector', () => expect(wrapper.is('#login-form')).toBe(true))
  })
})
