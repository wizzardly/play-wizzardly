import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'

import { ShowSignOutDialog, HideSignOutDialog, SIGN_OUT_DIALOG_SHOW, SIGN_OUT_DIALOG_HIDE } from 'Actions'

const mockStore = configureMockStore([thunk])

describe('DisplaySignOutDialog', () => {
  let store

  beforeEach(() => {
    store = mockStore()
  })

  it('dispatches the expected SIGN_OUT_DIALOG_SHOW action', () => {
    store.dispatch(ShowSignOutDialog())
    expect(store.getActions()).toMatchObject([{ type: SIGN_OUT_DIALOG_SHOW }])
  })

  it('dispatches the expected SIGN_OUT_DIALOG_HIDE action', () => {
    store.dispatch(HideSignOutDialog())
    expect(store.getActions()).toMatchObject([{ type: SIGN_OUT_DIALOG_HIDE }])
  })
})

