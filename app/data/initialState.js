export const sessionInitialState = {
  token: null,
}

export const siteInitialState = {
  signingIn: false,
  signInFailed: false,
  mainMenuOpen: false,
  signOutDialogOpen: false,
}

export default {
  session: { ...sessionInitialState },
  site: { ...siteInitialState },
}
