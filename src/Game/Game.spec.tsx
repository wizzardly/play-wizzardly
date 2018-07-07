// import { gameInitialState } from 'data/initialState'
import { shallow } from 'enzyme'
import React from 'react'

import Dashboard from 'Dashboard'
import Footer from 'Footer'

import Game from './Game'

describe('Game', () => {
  const subject = () => <Game />
  // const subject = (dispatch = () => {}, game = { ...gameInitialState }) =>
  //   <Game dispatch={dispatch} game={game} />

  describe('when shallow rendered', () => {
    const wrapper = shallow(subject())

    it('renders Dashboard', () => expect(wrapper.find(Dashboard)).toExist())
    it('renders Footer', () => expect(wrapper.find(Footer)).toExist())
  })
})
