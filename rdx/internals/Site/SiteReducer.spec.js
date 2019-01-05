import { SIGN_IN, SIGN_IN_SUCCESS, SIGN_IN_FAIL, SIGN_OUT } from 'Actions'
import { MAIN_MENU_SHOW, MAIN_MENU_HIDE, SIGN_OUT_DIALOG_SHOW, SIGN_OUT_DIALOG_HIDE } from './SiteActions'

import siteState from './SiteState'

import reducer from './SiteReducer'


describe('SiteReducer', () => {
  it('should reduce the initial state', () => expect(reducer(undefined, {})).toEqual(siteState))

  it('should reduce the SIGN_IN state', () => {
    const currentState = { ...siteState }

    expect(reducer(currentState, { type: SIGN_IN })).toEqual({ ...siteState, signingIn: true })
  })

  it('should reduce the SIGN_IN_FAIL state', () => {
    const currentState = { ...siteState, signingIn: true }

    expect(reducer(currentState, { type: SIGN_IN_FAIL })).toEqual({ ...siteState, signInFailed: true })
  })

  it('should reduce the SIGN_IN_SUCCESS state', () => {
    const currentState = { ...siteState, signingIn: true }

    expect(reducer(currentState, { type: SIGN_IN_SUCCESS })).toEqual({ ...siteState })
  })

  it('should reduce the MAIN_MENU_SHOW state', () => {
    const currentState = { ...siteState }

    expect(reducer(currentState, { type: MAIN_MENU_SHOW })).toEqual({ ...siteState, mainMenuOpen: true })
  })

  it('should reduce the MAIN_MENU_HIDE state', () => {
    const currentState = { ...siteState, mainMenuOpen: true }

    expect(reducer(currentState, { type: MAIN_MENU_HIDE })).toEqual({ ...siteState, mainMenuOpen: false })
  })

  it('should reduce the SIGN_OUT_DIALOG_SHOW state', () => {
    const currentState = { ...siteState }

    expect(reducer(currentState, { type: SIGN_OUT_DIALOG_SHOW })).toEqual({
      ...siteState,
      mainMenuOpen: false,
      signOutDialogOpen: true,
    })
  })

  it('should reduce the SIGN_OUT_DIALOG_HIDE state', () => {
    const currentState = { ...siteState, signOutDialogOpen: true }

    expect(reducer(currentState, { type: SIGN_OUT_DIALOG_HIDE })).toEqual({
      ...siteState,
      signOutDialogOpen: false,
    })
  })

  it('should reduce the SIGN_OUT state', () => {
    const currentState = { ...siteState, signOutDialogOpen: true, mainMenuOpen: true }

    expect(reducer(currentState, { type: SIGN_OUT })).toEqual({ ...siteState })
  })
})
