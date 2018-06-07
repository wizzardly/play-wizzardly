export const authenticationInitialState = {
  signedIn: false,
  token: null,
}

export const siteInitialState = {
  signingIn: false,
  signInFailed: false,
  mainMenuOpen: false,
  signOutDialogOpen: false,
}

export default {
  authentication: { ...authenticationInitialState },
  site: { ...siteInitialState },
}
