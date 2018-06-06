import faker from 'faker'

import { SIGN_IN, SIGN_IN_SUCCESS, SIGN_OUT } from 'Actions'
import { authenticationInitialState } from 'data/initialState'

import reducer from './AuthenticationReducer'

describe('AuthenticationReducer', () => {
  it('should reduce the initial state', () => expect(reducer(undefined, {})).toEqual(authenticationInitialState))

  it('should reduce the SIGN_IN state', () => {
    const jwt = faker.random.uuid()
    const currentState = { ...authenticationInitialState, signedIn: true, jwt: jwt }

    expect(reducer(currentState, { type: SIGN_IN })).toEqual({ ...authenticationInitialState })
  })

  it('should reduce the SIGN_IN_SUCCESS state', () => {
    const jwt = faker.random.uuid()
    const currentState = { ...authenticationInitialState }

    expect(reducer(currentState, { type: SIGN_IN_SUCCESS, payload: { data: { jwt } } })).toEqual({
      ...authenticationInitialState,
      signedIn: true,
      token: jwt,
    })
  })

  it('should reduce the SIGN_OUT state', () => {
    const jwt = faker.random.uuid()
    const currentState = { ...authenticationInitialState, signedIn: true, token: jwt }

    expect(reducer(currentState, { type: SIGN_OUT })).toEqual({ ...authenticationInitialState })
  })
})
