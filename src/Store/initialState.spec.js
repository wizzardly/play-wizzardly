import initialState, { authenticationInitialState } from './initialState.js'

describe('initialState', () => {
  it('contains authenticationInitialState', () => {
    expect(initialState.authentication).toEqual(authenticationInitialState)
  })
})
