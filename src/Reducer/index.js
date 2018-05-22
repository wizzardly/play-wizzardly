import { combineReducers } from 'redux'

import authentication from './AuthenticationReducer'
import site from './SiteReducer'

export default combineReducers({
  authentication,
  site,
})
