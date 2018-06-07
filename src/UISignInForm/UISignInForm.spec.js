import React from 'react'
import { mount, shallow } from 'enzyme'
import faker from 'faker'

import UISignInForm, { SIGN_IN_FAIL_ERROR_TEXT } from './UISignInForm'

describe('UISignInForm', () => {
  const subject = (onSubmit = () => {}, signingIn = false, signInFailed = false, classes = {}) =>
    <UISignInForm onSubmit={onSubmit} signingIn={signingIn} signInFailed={signInFailed} classes={classes} />

  const emailInputSelector = 'input#sign-in-form-email'
  const passwordInputSelector = 'input#sign-in-form-password[type="password"]'
  const submitButtonSelector = 'button#sign-in-form-submit[type="submit"]'
  const loadingSpinnerSelector = 'div#sign-in-loading-spinner'

  describe('when mounted', () => {
    const onSubmit = jest.fn()
    let mounted

    beforeEach(() => {
      mounted = mount(subject(onSubmit))
    })

    it('renders enabled email input', () => expect(mounted.find(emailInputSelector)).not.toBeDisabled())
    it('renders enabled password input', () => expect(mounted.find(passwordInputSelector)).not.toBeDisabled())

    describe('submit button', () => {
      const submitButton = () => mounted.find(submitButtonSelector)
      const setValues = (email, password) => {
        mounted.find(emailInputSelector).simulate('change', { target: { value: email } })
        mounted.find(passwordInputSelector).simulate('change', { target: { value: password } })
      }

      it('renders disabled submit button', () => expect(submitButton()).toExist())

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
        const email = faker.internet.email()
        const password = faker.internet.password()

        beforeEach(() => setValues(email, password))

        it('is enabled', () => expect(submitButton()).not.toBeDisabled())

        it('calls onSubmit when submitted', () => {
          mounted.simulate('submit')
          expect(onSubmit).toHaveBeenCalledWith({ email, password })
        })
      })
    })
  })

  describe('when mounted and signing in', () => {
    let mounted

    beforeEach(() => {
      mounted = mount(subject(() => {}, true))
    })

    it('renders disabled email input', () => expect(mounted.find(emailInputSelector)).toBeDisabled())
    it('renders disabled password input', () => expect(mounted.find(passwordInputSelector)).toBeDisabled())
    it('renders disabled submit button', () => expect(mounted.find(submitButtonSelector)).toBeDisabled())
    it('renders spinner in submit button', () => expect(mounted.find(loadingSpinnerSelector)).toExist())
  })

  describe('when mounted and sign in failed', () => {
    const invalid = 'aria-invalid'

    let mounted

    beforeEach(() => {
      mounted = mount(subject(() => {}, false, true))
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
