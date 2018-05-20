import { authenticationInitialState } from 'data/initialState'

import reducer from './AuthenticationReducer'

describe('AuthenticationReducer', () => {
  it('should return the initial state', () => {
    expect(reducer(undefined, {})).toEqual(authenticationInitialState)
  })
})
