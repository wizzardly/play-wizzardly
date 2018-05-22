import faker from 'faker'

import { SIGN_IN, SIGN_IN_SUCCESS, SIGN_IN_FAIL, TOKEN_RECOVERY, SIGN_OUT } from 'Actions'
import { authenticationInitialState } from 'data/initialState'

import reducer from './AuthenticationReducer'

describe('AuthenticationReducer', () => {
  it('should return the initial state', () => expect(reducer(undefined, {})).toEqual(authenticationInitialState))

  it('should return the SIGN_IN state', () => {
    const currentState = { ...authenticationInitialState }

    expect(reducer(currentState, { type: SIGN_IN })).toEqual({ ...authenticationInitialState, signingIn: true })
  })

  it('should return the SIGN_IN_FAIL state', () => {
    const currentState = { ...authenticationInitialState, signingIn: true }

    expect(reducer(currentState, { type: SIGN_IN_FAIL })).toEqual({ ...authenticationInitialState, signInFailed: true })
  })

  it('should return the SIGN_IN_SUCCESS state', () => {
    const jwt = faker.random.uuid()
    const currentState = { ...authenticationInitialState, signingIn: true }

    expect(reducer(currentState, { type: SIGN_IN_SUCCESS, payload: { data: { jwt } } })).toEqual({
      ...authenticationInitialState,
      signedIn: true,
      token: jwt,
    })

    expect(localStorage.getItem('token')).toBe(jwt)
  })

  it('should return the TOKEN_RECOVERY state', () => {
    const jwt = faker.random.uuid()
    const currentState = { ...authenticationInitialState, signingIn: true }

    expect(reducer(currentState, { type: TOKEN_RECOVERY, token: jwt })).toEqual({
      ...authenticationInitialState,
      signedIn: true,
      token: jwt,
    })
  })

  it('should return the SIGN_OUT state', () => {
    const jwt = faker.random.uuid()
    localStorage.setItem('token', jwt)

    const currentState = { ...authenticationInitialState, signedIn: true, token: jwt }

    expect(reducer(currentState, { type: SIGN_OUT })).toEqual({ ...authenticationInitialState })
    expect(localStorage.getItem('token')).toBe(null)
  })
})
