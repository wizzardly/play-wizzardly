import { combineReducers } from 'redux'

import matchmaking from '../internals/Matchmaking/Reducer'
import session from '../internals/Session/Reducer'
import site from '../internals/Site/Reducer'

export default combineReducers({
  matchmaking,
  session,
  site,
})
