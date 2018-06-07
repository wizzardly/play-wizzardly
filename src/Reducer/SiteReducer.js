import { siteInitialState } from 'data/initialState'
import {
  SIGN_IN, SIGN_IN_SUCCESS, SIGN_IN_FAIL,
  MAIN_MENU_SHOW, MAIN_MENU_HIDE, SIGN_OUT_DIALOG_SHOW, SIGN_OUT_DIALOG_HIDE, SIGN_OUT,
} from 'Actions'

export default (state = siteInitialState, action) => {
  switch (action.type) {
  case SIGN_IN:
    return { ...state, signingIn: true }
  case SIGN_IN_SUCCESS:
    return { ...state, signingIn: false }
  case SIGN_IN_FAIL:
    return { ...state, signingIn: false, signInFailed: true }
  case MAIN_MENU_SHOW:
    return { ...state, mainMenuOpen: true }
  case MAIN_MENU_HIDE:
    return { ...state, mainMenuOpen: false }
  case SIGN_OUT_DIALOG_SHOW:
    return { ...state, signOutDialogOpen: true }
  case SIGN_OUT_DIALOG_HIDE:
    return { ...state, signOutDialogOpen: false }
  case SIGN_OUT:
    return { ...siteInitialState }
  default:
    return state
  }
}
