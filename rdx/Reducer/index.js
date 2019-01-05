import { combineReducers } from 'redux'

import session from '../internals/Session/Reducer'
import site from '../internals/Site/Reducer'

export default combineReducers({
  session,
  site,
})
