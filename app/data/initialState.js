export const authenticationInitialState = {
  signedIn: false,
  signingIn: false,
  signInFailed: false,
  token: null,
  currentUser: null,
}

export const siteInitialState = {
  mainMenuOpen: false,
}

export default {
  authentication: { ...authenticationInitialState },
  site: { ...siteInitialState },
}
