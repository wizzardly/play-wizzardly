export const authenticationInitialState = {
  signedIn: false,
  signingIn: false,
  signInFailed: false,
  token: null,
  currentUser: null,
}

export default {
  authentication: { ...authenticationInitialState },
}
