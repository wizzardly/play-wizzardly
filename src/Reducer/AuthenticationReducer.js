import { authenticationInitialState } from 'data/initialState'
import { SIGN_IN, SIGN_IN_SUCCESS, SIGN_IN_FAIL } from 'Actions'

export default (state = authenticationInitialState, action) => {
  switch (action.type) {
  case SIGN_IN:
    return { ...authenticationInitialState, signingIn: true }
  case SIGN_IN_SUCCESS:
    return {
      ...state,
      signingIn: false,
      signedIn: true,
      token: action.payload.data.jwt,
    }
  case SIGN_IN_FAIL:
    return { ...state, signingIn: false, signInFailed: true }
  default:
    return state
  }
}
