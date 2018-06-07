import faker from 'faker'

import { SIGN_IN, SIGN_IN_SUCCESS, SIGN_OUT } from 'Actions'
import { sessionInitialState } from 'data/initialState'

import reducer from './SessionReducer'

describe('SessionReducer', () => {
  it('should reduce the initial state', () => expect(reducer(undefined, {})).toEqual(sessionInitialState))

  it('should reduce the SIGN_IN state', () => {
    const jwt = faker.random.uuid()
    const currentState = { ...sessionInitialState, jwt }

    expect(reducer(currentState, { type: SIGN_IN })).toEqual({ ...sessionInitialState })
  })

  it('should reduce the SIGN_IN_SUCCESS state', () => {
    const jwt = faker.random.uuid()
    const currentState = { ...sessionInitialState }

    expect(reducer(currentState, { type: SIGN_IN_SUCCESS, payload: { data: { jwt } } })).toEqual({
      ...sessionInitialState,
      token: jwt,
    })
  })

  it('should reduce the SIGN_OUT state', () => {
    const jwt = faker.random.uuid()
    const currentState = { ...sessionInitialState, token: jwt }

    expect(reducer(currentState, { type: SIGN_OUT })).toEqual({ ...sessionInitialState })
  })
})
