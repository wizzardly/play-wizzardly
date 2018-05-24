export const authenticationInitialState = {
  signedIn: false,
  signingIn: false,
  signInFailed: false,
  token: null,
  currentUser: null,
}

export const siteInitialState = {
  mainMenuOpen: false,
  signOutDialogOpen: false,
}

export default {
  authentication: { ...authenticationInitialState },
  site: { ...siteInitialState },
}
