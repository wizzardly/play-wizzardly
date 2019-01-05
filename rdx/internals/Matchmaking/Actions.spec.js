import MockAdapter from 'axios-mock-adapter'
import { client } from 'Store'

import configureMockStore from 'redux-mock-store'
import axiosMiddleware from 'redux-axios-middleware'
import thunk from 'redux-thunk'

import { CheckMatchmaking, CHECK_MATCHMAKING, CHECK_MATCHMAKING_SUCCESS, CHECK_MATCHMAKING_FAIL } from 'Actions'

const mockClient = new MockAdapter(client)
const mockStore = configureMockStore([thunk, axiosMiddleware(client)])

describe('MatchmakingActions', () => {
  let store

  beforeEach(() => {
    store = mockStore()
  })

  describe('CheckMatchmaking', () => {
    const payload = { request: { url: '/matchmaking_status', method: 'GET' } }

    afterEach(() => {
      mockClient.reset()
    })

    it('dispatches the expected actions on success', () => {
      mockClient.onGet('/matchmaking_status').reply(200)

      return store.dispatch(CheckMatchmaking()).then(() => {
        expect(store.getActions()).toMatchObject([
          { type: CHECK_MATCHMAKING, payload },
          { type: CHECK_MATCHMAKING_SUCCESS, payload: {} },
        ])
      })
    })

    it('dispatches the expected actions on failure', () => {
      mockClient.onPost('/matchmaking_status').reply(404)

      return store.dispatch(CheckMatchmaking()).then(() => {
        expect(store.getActions()).toMatchObject([
          { type: CHECK_MATCHMAKING, payload },
          { type: CHECK_MATCHMAKING_FAIL, error: {} },
        ])
      })
    })
  })
})
