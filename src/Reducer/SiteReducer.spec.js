import { MAIN_MENU_SHOW, MAIN_MENU_HIDE } from 'Actions'
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
})
