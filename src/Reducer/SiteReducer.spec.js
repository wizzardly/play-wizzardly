import { MAIN_MENU_SHOW, MAIN_MENU_HIDE, SIGN_OUT_DIALOG_SHOW, SIGN_OUT_DIALOG_HIDE } from 'Actions'
import { siteInitialState } from 'data/initialState'

import reducer from './SiteReducer'

describe('SiteReducer', () => {
  it('should return the initial state', () => expect(reducer(undefined, {})).toEqual(siteInitialState))

  it('should return the MAIN_MENU_SHOW state', () => {
    const currentState = { ...siteInitialState }

    expect(reducer(currentState, { type: MAIN_MENU_SHOW })).toEqual({ ...siteInitialState, mainMenuOpen: true })
  })

  it('should return the MAIN_MENU_HIDE state', () => {
    const currentState = { ...siteInitialState, mainMenuOpen: true }

    expect(reducer(currentState, { type: MAIN_MENU_HIDE })).toEqual({ ...siteInitialState, mainMenuOpen: false })
  })

  it('should return the SIGN_OUT_DIALOG_SHOW state', () => {
    const currentState = { ...siteInitialState }

    expect(reducer(currentState, { type: SIGN_OUT_DIALOG_SHOW })).toEqual({
      ...siteInitialState,
      signOutDialogOpen: true,
    })
  })

  it('should return the SIGN_OUT_DIALOG_HIDE state', () => {
    const currentState = { ...siteInitialState, signOutDialogOpen: true }

    expect(reducer(currentState, { type: SIGN_OUT_DIALOG_HIDE })).toEqual({
      ...siteInitialState,
      signOutDialogOpen: false,
    })
  })
})
