import faker from 'faker'

import { SIGN_IN, SIGN_IN_SUCCESS, SIGN_OUT } from 'Actions'
import { sessionState } from 'states'

import reducer from './SessionReducer'

describe('SessionReducer', () => {
  it('should reduce the initial state', () => expect(reducer(undefined, {})).toEqual(sessionState))

  it('should reduce the SIGN_IN state', () => {
    const jwt = faker.random.uuid()
    const currentState = { ...sessionState, jwt }

    expect(reducer(currentState, { type: SIGN_IN })).toEqual({ ...sessionState })
  })

  it('should reduce the SIGN_IN_SUCCESS state', () => {
    const jwt = faker.random.uuid()
    const currentState = { ...sessionState }

    expect(reducer(currentState, { type: SIGN_IN_SUCCESS, payload: { data: { jwt } } })).toEqual({
      ...sessionState,
      token: jwt,
    })
  })

  it('should reduce the SIGN_OUT state', () => {
    const jwt = faker.random.uuid()
    const currentState = { ...sessionState, token: jwt }

    expect(reducer(currentState, { type: SIGN_OUT })).toEqual({ ...sessionState })
  })
})
