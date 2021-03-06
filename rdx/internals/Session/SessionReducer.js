import { SIGN_IN, SIGN_IN_SUCCESS, SIGN_OUT } from './SessionActions'

import sessionState from './SessionState'

export default (state = { ...sessionState }, action) => {
  switch (action.type) {
  case SIGN_IN:
  case SIGN_OUT:
    return { ...sessionState }
  case SIGN_IN_SUCCESS:
    return { ...state, token: action.payload.data.jwt }
  default:
    return state
  }
}
