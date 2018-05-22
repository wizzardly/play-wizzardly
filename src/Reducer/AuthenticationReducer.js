import { authenticationInitialState } from 'data/initialState'
import { SIGN_IN, SIGN_IN_SUCCESS, SIGN_IN_FAIL, TOKEN_RECOVERY } from 'Actions'

const extractAndStoreToken = action => {
  const { jwt } = action.payload.data

  if (localStorage.getItem('token') !== jwt) {
    localStorage.setItem('token', jwt)
  }

  return jwt
}

export default (state = authenticationInitialState, action) => {
  switch (action.type) {
  case SIGN_IN:
    return { ...authenticationInitialState, signingIn: true }
  case SIGN_IN_SUCCESS:
    return {
      ...state,
      signingIn: false,
      signedIn: true,
      token: extractAndStoreToken(action),
    }
  case SIGN_IN_FAIL:
    return { ...state, signingIn: false, signInFailed: true }
  case TOKEN_RECOVERY:
    return { ...authenticationInitialState, signedIn: true, token: action.token }
  default:
    return state
  }
}
