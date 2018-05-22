import faker from 'faker'

import { SIGN_IN } from 'Actions'
import { authenticationInitialState } from 'data/initialState'

import reducer from './AuthenticationReducer'
import {SIGN_IN_FAIL, SIGN_IN_SUCCESS} from "../Actions";

describe('AuthenticationReducer', () => {
  it('should return the initial state', () => {
    expect(reducer(undefined, {})).toEqual(authenticationInitialState)
  })

  it('should return the SIGN_IN state', () => {
    expect(reducer(undefined, { type: SIGN_IN })).toEqual({ ...authenticationInitialState, signingIn: true })
  })

  it('should return the SIGN_IN_FAIL state', () => {
    expect(reducer(undefined, { type: SIGN_IN_FAIL })).toEqual({ ...authenticationInitialState, signInFailed: true })
  })

  it('should return the SIGN_IN_SUCCESS state', () => {
    const jwt = faker.random.uuid()

    expect(reducer(undefined, { type: SIGN_IN_SUCCESS, payload: { data: { jwt: jwt } } })).toEqual({
      ...authenticationInitialState,
      signedIn: true,
      token: jwt,
    })
  })
})
