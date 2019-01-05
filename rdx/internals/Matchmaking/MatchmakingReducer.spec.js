import { CHECK_MATCHMAKING, CHECK_MATCHMAKING_SUCCESS, CHECK_MATCHMAKING_FAIL } from './MatchmakingActions'
import matchmakingState from './MatchmakingState'

import reducer from './MatchmakingReducer'

describe('MatchmakingReducer', () => {
  it('should reduce the initial state', () => expect(reducer(undefined, {})).toEqual(matchmakingState))

  it('should reduce the CHECK_MATCHMAKING state', () => {
    const currentState = { ...matchmakingState }

    expect(reducer(currentState, { type: CHECK_MATCHMAKING })).toEqual({
      ...matchmakingState,
      checkingMatchmaking: true,
    })
  })

  it('should reduce the CHECK_MATCHMAKING_SUCCESS state', () => {
    const currentState = { ...matchmakingState, checkingMatchmaking: true }

    expect(reducer(currentState, { type: CHECK_MATCHMAKING_SUCCESS, payload: {} })).toEqual({
      ...matchmakingState,
      checkingMatchmaking: false,
    })
  })

  it('should reduce the CHECK_MATCHMAKING_FAIL state', () => {
    const currentState = { ...matchmakingState, checkingMatchmaking: true }

    expect(reducer(currentState, { type: CHECK_MATCHMAKING_FAIL, payload: {} })).toEqual({
      ...matchmakingState,
      checkingMatchmaking: false,
    })
  })
})
