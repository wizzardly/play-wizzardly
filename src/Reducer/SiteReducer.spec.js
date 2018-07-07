import { siteInitialState } from 'data/initialState'
import {
  SIGN_IN, SIGN_IN_SUCCESS, SIGN_IN_FAIL,
  MAIN_MENU_SHOW, MAIN_MENU_HIDE, SIGN_OUT_DIALOG_SHOW, SIGN_OUT_DIALOG_HIDE, SIGN_OUT,
} from 'Actions'

import reducer from './SiteReducer'

describe('SiteReducer', () => {
  it('should reduce the initial state', () => expect(reducer(undefined, {})).toEqual(siteInitialState))

  it('should reduce the SIGN_IN state', () => {
    const currentState = { ...siteInitialState }

    expect(reducer(currentState, { type: SIGN_IN })).toEqual({ ...siteInitialState, signingIn: true })
  })

  it('should reduce the SIGN_IN_FAIL state', () => {
    const currentState = { ...siteInitialState, signingIn: true }

    expect(reducer(currentState, { type: SIGN_IN_FAIL })).toEqual({ ...siteInitialState, signInFailed: true })
  })

  it('should reduce the SIGN_IN_SUCCESS state', () => {
    const currentState = { ...siteInitialState, signingIn: true }

    expect(reducer(currentState, { type: SIGN_IN_SUCCESS })).toEqual({ ...siteInitialState })
  })

  it('should reduce the MAIN_MENU_SHOW state', () => {
    const currentState = { ...siteInitialState }

    expect(reducer(currentState, { type: MAIN_MENU_SHOW })).toEqual({ ...siteInitialState, mainMenuOpen: true })
  })

  it('should reduce the MAIN_MENU_HIDE state', () => {
    const currentState = { ...siteInitialState, mainMenuOpen: true }

    expect(reducer(currentState, { type: MAIN_MENU_HIDE })).toEqual({ ...siteInitialState, mainMenuOpen: false })
  })

  it('should reduce the SIGN_OUT_DIALOG_SHOW state', () => {
    const currentState = { ...siteInitialState }

    expect(reducer(currentState, { type: SIGN_OUT_DIALOG_SHOW })).toEqual({
      ...siteInitialState,
      mainMenuOpen: false,
      signOutDialogOpen: true,
    })
  })

  it('should reduce the SIGN_OUT_DIALOG_HIDE state', () => {
    const currentState = { ...siteInitialState, signOutDialogOpen: true }

    expect(reducer(currentState, { type: SIGN_OUT_DIALOG_HIDE })).toEqual({
      ...siteInitialState,
      signOutDialogOpen: false,
    })
  })

  it('should reduce the SIGN_OUT state', () => {
    const currentState = { ...siteInitialState, signOutDialogOpen: true, mainMenuOpen: true }

    expect(reducer(currentState, { type: SIGN_OUT })).toEqual({ ...siteInitialState })
  })
})
