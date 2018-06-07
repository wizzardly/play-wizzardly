import { combineReducers } from 'redux'

import session from './SessionReducer'
import site from './SiteReducer'

export default combineReducers({
  session,
  site,
})
