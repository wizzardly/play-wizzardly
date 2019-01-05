import React from 'react'
import { mount, shallow } from 'enzyme'
import faker from 'faker'
import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import { siteState } from 'States'
import { client } from 'Store'
import MockAdapter from 'axios-mock-adapter'

import axiosMiddleware from 'redux-axios-middleware'

import { SIGN_IN, SIGN_IN_SUCCESS, SIGN_IN_FAIL } from 'Actions'

import UISignInForm from 'UISignInForm'

import SignInForm from './SignInForm'

const mockClient = new MockAdapter(client)
const mockStore = configureMockStore([thunk, axiosMiddleware(client)])

describe('SignInForm', () => {
  const subject = (dispatch = () => {}, site = { ...siteState }) =>
    <SignInForm dispatch={dispatch} site={site} />

  describe('when shallow rendered', () => {
    const wrapper = shallow(subject())
    const formProps = wrapper.find(UISignInForm).props()

    it('renders a UISignInForm neither signingIn nor signInFailed', () => {
      expect(formProps.signingIn).toBe(false)
      expect(formProps.signInFailed).toBe(false)
    })
  })

  describe('when shallow rendered and signingIn', () => {
    const wrapper = shallow(subject(() => {}, { ...siteState, signingIn: true }))
    const formProps = wrapper.find(UISignInForm).props()

    it('renders a UISignInForm signingIn', () => {
      expect(formProps.signingIn).toBe(true)
      expect(formProps.signInFailed).toBe(false)
    })
  })

  describe('when shallow rendered and signInFailed', () => {
    const wrapper = shallow(subject(() => {}, { ...siteState, signInFailed: true }))
    const formProps = wrapper.find(UISignInForm).props()

    it('renders a UISignInForm signingIn', () => {
      expect(formProps.signingIn).toBe(false)
      expect(formProps.signInFailed).toBe(true)
    })
  })

  describe('when mounted with a store', () => {
    const email = faker.internet.email()
    const password = faker.internet.password()

    let store
    let mounted

    mockClient.onPost('/user_token').reply(200, { jwt: faker.random.uuid() })

    beforeEach(() => {
      store = mockStore()
      mounted = mount(subject(store.dispatch))
    })

    it('calls the SignIn axios action', () => {
      mounted.find(UISignInForm).props().onSubmit({ email, password })

      const payload = { request: { data: { auth: { email, password } }, url: '/user_token', method: 'POST' } }

      expect(store.getActions()).toEqual([{ payload, type: SIGN_IN, types: [SIGN_IN, SIGN_IN_SUCCESS, SIGN_IN_FAIL] }])
    })
  })
})
