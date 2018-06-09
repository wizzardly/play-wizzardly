export const sessionInitialState = {
  token: null,
}

export const siteInitialState = {
  signingIn: false,
  signInFailed: false,
  mainMenuOpen: false,
  signOutDialogOpen: false,
}

export const gameInitialState = {
}

export default {
  session: { ...sessionInitialState },
  site: { ...siteInitialState },
  game: { ...gameInitialState },
}
