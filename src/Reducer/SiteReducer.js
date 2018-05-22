import { siteInitialState } from 'data/initialState'
import { MAIN_MENU_SHOW, MAIN_MENU_HIDE, SIGN_OUT_DIALOG_SHOW, SIGN_OUT_DIALOG_HIDE } from 'Actions'

export default (state = siteInitialState, action) => {
  switch (action.type) {
  case MAIN_MENU_SHOW:
    return { ...state, mainMenuOpen: true }
  case MAIN_MENU_HIDE:
    return { ...state, mainMenuOpen: false }
  case SIGN_OUT_DIALOG_SHOW:
    return { ...state, signOutDialogOpen: true }
  case SIGN_OUT_DIALOG_HIDE:
    return { ...state, signOutDialogOpen: false }
  default:
    return state
  }
}
