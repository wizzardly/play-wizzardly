import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'

import {
  ShowSignOutDialog, HideSignOutDialog, SIGN_OUT_DIALOG_SHOW, SIGN_OUT_DIALOG_HIDE,
  ShowMainMenu, HideMainMenu, MAIN_MENU_SHOW, MAIN_MENU_HIDE,
} from 'Actions'

const mockStore = configureMockStore([thunk])

describe('SiteActions', () => {
  let store

  beforeEach(() => {
    store = mockStore()
  })

  describe('ShowSignOutDialog', () => {
    it('dispatches the expected SIGN_OUT_DIALOG_SHOW action', () => {
      store.dispatch(ShowSignOutDialog())
      expect(store.getActions()).toMatchObject([{ type: SIGN_OUT_DIALOG_SHOW }])
    })
  })

  describe('HideSignOutDialog', () => {
    it('dispatches the expected SIGN_OUT_DIALOG_HIDE action', () => {
      store.dispatch(HideSignOutDialog())
      expect(store.getActions()).toMatchObject([{ type: SIGN_OUT_DIALOG_HIDE }])
    })
  })

  describe('ShowMainMenu', () => {
    it('dispatches the expected SIGN_OUT_DIALOG_SHOW action', () => {
      store.dispatch(ShowMainMenu())
      expect(store.getActions()).toMatchObject([{ type: MAIN_MENU_SHOW }])
    })
  })

  describe('HideMainMenu', () => {
    it('dispatches the expected SIGN_OUT_DIALOG_HIDE action', () => {
      store.dispatch(HideMainMenu())
      expect(store.getActions()).toMatchObject([{ type: MAIN_MENU_HIDE }])
    })
  })
})
