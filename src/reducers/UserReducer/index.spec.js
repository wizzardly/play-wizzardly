import initialState from 'store/initialState'

import reducer from './index.js'

describe('UserReducer', () => {
  it('should return the initial state', () => {
    expect(reducer(undefined, {})).toEqual(initialState.user)
  })
})
