import { sessionInitialState } from 'data/initialState'
import { SIGN_IN, SIGN_IN_SUCCESS, SIGN_OUT } from 'Actions'

export default (state = sessionInitialState, action) => {
  switch (action.type) {
  case SIGN_IN:
  case SIGN_OUT:
    return { ...sessionInitialState }
  case SIGN_IN_SUCCESS:
    return { ...state, token: action.payload.data.jwt }
  default:
    return state
  }
}
