import faker from 'faker'
import MockAdapter from 'axios-mock-adapter'
import { client } from 'Store'

import configureMockStore from 'redux-mock-store'
import axiosMiddleware from 'redux-axios-middleware'
import thunk from 'redux-thunk'

import { SignIn, SIGN_IN, SIGN_IN_SUCCESS, SIGN_IN_FAIL } from 'Actions'

const mockClient = new MockAdapter(client)
const mockStore = configureMockStore([thunk, axiosMiddleware(client)])

describe('SignIn', () => {
  const email = faker.internet.email()
  const password = faker.internet.password()
  const payload = { request: { data: { auth: { email, password } }, url: '/user_token', method: 'POST' } }

  let store

  beforeEach(() => {
    store = mockStore()
  })

  afterEach(() => {
    mockClient.reset()
  })

  it('dispatches the expected actions on success', () => {
    const jwt = faker.random.uuid()

    mockClient.onPost('/user_token').reply(200, { jwt })

    return store.dispatch(SignIn(email, password)).then(() => {
      expect(store.getActions()).toMatchObject([
        { type: SIGN_IN, payload },
        { type: SIGN_IN_SUCCESS, payload: { data: { jwt } } },
      ])
    })
  })

  it('dispatches the expected actions on failure', () => {
    mockClient.onPost('/user_token').reply(404)

    return store.dispatch(SignIn(email, password)).then(() => {
      expect(store.getActions()).toMatchObject([
        { type: SIGN_IN, payload },
        { type: SIGN_IN_FAIL, error: {} },
      ])
    })
  })
})

