import React from 'react'
import { gameInitialState } from 'data/initialState'
import { connectedComponentPropType, gameShape } from 'data/shapes'

import Dashboard from 'Dashboard'
import Footer from 'Footer'

function Game({ dispatch, game }) {
  return <section id="game">
    <Dashboard />
    <Footer />
  </section>
}

Game.propTypes = {
  ...connectedComponentPropType,
  game: gameShape,
}

Game.defaultProps = {
  game: { ...gameInitialState },
}

export default Game
