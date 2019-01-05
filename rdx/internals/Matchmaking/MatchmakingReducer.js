import { CHECK_MATCHMAKING, CHECK_MATCHMAKING_SUCCESS, CHECK_MATCHMAKING_FAIL } from './MatchmakingActions'

import matchmakingState from './MatchmakingState'

export default (state = { ...matchmakingState }, action) => {
  switch (action.type) {
  case CHECK_MATCHMAKING:
    return { ...state, checkingMatchmaking: true }
  case CHECK_MATCHMAKING_SUCCESS:
    return { ...state, checkingMatchmaking: false }
  case CHECK_MATCHMAKING_FAIL:
    return { ...state, checkingMatchmaking: false }
  default:
    return state
  }
}
