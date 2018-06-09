import React from 'react'
import { shallow } from 'enzyme'
import { gameInitialState } from 'data/initialState'

import Footer from 'Footer'
import Dashboard from 'Dashboard'

import Game from './Game'

describe('Game', () => {
  const subject = (dispatch = () => {}, game = { ...gameInitialState }) =>
    <Game dispatch={dispatch} game={game} />

  describe('when shallow rendered', () => {
    const wrapper = shallow(subject())

    it('renders Dashboard', () => expect(wrapper.find(Dashboard)).toExist())
    it('renders Footer', () => expect(wrapper.find(Footer)).toExist())
  })
})
