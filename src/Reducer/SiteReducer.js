import { siteInitialState } from 'data/initialState'
import { MAIN_MENU_SHOW, MAIN_MENU_HIDE } from 'Actions'

export default (state = siteInitialState, action) => {
  switch (action.type) {
  case MAIN_MENU_SHOW:
    return { ...state, mainMenuOpen: true }
  case MAIN_MENU_HIDE:
    return { ...state, mainMenuOpen: false }
  default:
    return state
  }
}
