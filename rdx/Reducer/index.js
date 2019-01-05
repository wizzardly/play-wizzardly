import { combineReducers } from 'redux'

import matchmaking from '../internals/Matchmaking/MatchmakingReducer'
import session from '../internals/Session/SessionReducer'
import site from '../internals/Site/SiteReducer'

export default combineReducers({
  matchmaking,
  session,
  site,
})
