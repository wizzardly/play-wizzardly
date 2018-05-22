import React from 'react'
import { mount, shallow } from 'enzyme'
import faker from 'faker'
import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import { authenticationInitialState } from 'data/initialState'

import { SIGN_IN } from 'Actions'

import SignInForm, { SIGN_IN_FAIL_ERROR_TEXT } from './SignInForm'

const mockStore = configureMockStore([thunk])

describe('SignInForm', () => {
  const subject = (dispatch, authentication = { ...authenticationInitialState }) => {
    return <SignInForm dispatch={dispatch} authentication={authentication} classes={{ textField: '', button: '' }} />
  }

  const emailInputSelector = 'input#sign-in-form-email'
  const passwordInputSelector = 'input#sign-in-form-password[type="password"]'
  const submitButtonSelector = 'button#sign-in-form-submit[type="submit"]'

  describe('when mounted', () => {
    let mounted

    beforeEach(() => {
      mounted = mount(subject(() => {}))
    })

    it('renders enabled email input', () => expect(mounted.find(emailInputSelector)).not.toBeDisabled())
    it('renders enabled password input', () => expect(mounted.find(passwordInputSelector)).not.toBeDisabled())

    describe('submit button', () => {
      const submitButton = () => mounted.find(submitButtonSelector)
      const setValues = (email, password) => {
        mounted.find(emailInputSelector).simulate('change', { target: { value: email } })
        mounted.find(passwordInputSelector).simulate('change', { target: { value: password } })
      }

      it('renders disabled submit button', () => expect(submitButton()).toHaveLength(1))

      describe('when no email or password is entered', () => {
        beforeEach(() => setValues('', ''))

        it('is disabled', () => expect(submitButton()).toBeDisabled())
      })

      describe('when only an email is entered', () => {
        beforeEach(() => setValues(faker.internet.email(), ''))

        it('is disabled', () => expect(submitButton()).toBeDisabled())
      })

      describe('when only a password is entered', () => {
        beforeEach(() => setValues('', faker.internet.password()))

        it('is disabled', () => expect(submitButton()).toBeDisabled())
      })

      describe('when both a email and password are entered', () => {
        beforeEach(() => setValues(faker.internet.email(), faker.internet.password()))

        it('is enabled', () => expect(submitButton()).not.toBeDisabled())
      })
    })
  })

  describe('when mounted with a store', () => {
    const email = faker.internet.email()
    const password = faker.internet.password()

    let store
    let mounted

    beforeEach(() => {
      store = mockStore()
      mounted = mount(subject(store.dispatch))

      mounted.setState({ email, password })
    })

    it('calls the SignIn action', () => {
      mounted.find('form#sign-in-form').simulate('submit')

      const payload = { request: { data: { auth: { email, password } }, url: '/user_token', method: 'POST' } }

      expect(store.getActions()).toEqual([{ type: SIGN_IN, payload }])
    })
  })

  describe('when mounted and signing in', () => {
    let mounted

    beforeEach(() => {
      mounted = mount(subject(() => {}, { ...authenticationInitialState, signingIn: true }))
    })

    it('renders disabled email input', () => expect(mounted.find(emailInputSelector)).toBeDisabled())
    it('renders disabled password input', () => expect(mounted.find(passwordInputSelector)).toBeDisabled())
    it('renders disabled submit button', () => expect(mounted.find(submitButtonSelector)).toBeDisabled())
    it('renders spinner in submit button', () => {
      expect(mounted.find(`${submitButtonSelector} .fa.fa-spinner`)).toHaveLength(1)
    })
  })

  describe('when mounted and sign in failed', () => {
    const invalid = 'aria-invalid'

    let mounted

    beforeEach(() => {
      mounted = mount(subject(() => {}, { ...authenticationInitialState, signInFailed: true }))
    })

    it('renders disabled email input', () => expect(mounted.find(emailInputSelector).prop(invalid)).toBe(true))
    it('renders disabled password input', () => expect(mounted.find(passwordInputSelector).prop(invalid)).toBe(true))
    it('renders error text on password', () => {
      expect(mounted.find('p#sign-in-form-password-helper-text').text()).toBe(SIGN_IN_FAIL_ERROR_TEXT)
    })
  })

  describe('when shallow rendered', () => {
    const wrapper = shallow(subject(() => {}))

    it('has the expected selector', () => expect(wrapper.is('#sign-in-form')).toBe(true))
  })
})
