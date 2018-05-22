import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'

import { SignOut, SIGN_OUT } from 'Actions'

const mockStore = configureMockStore([thunk])

describe('SignOut', () => {
  let store

  beforeEach(() => {
    store = mockStore()
  })

  it('dispatches the expected action', () => {
    store.dispatch(SignOut())
    expect(store.getActions()).toMatchObject([{ type: SIGN_OUT }])
  })
})

