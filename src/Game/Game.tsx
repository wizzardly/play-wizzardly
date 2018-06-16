import React, { SFC } from 'react'
// import { gameInitialState } from 'data/initialState'
// import { connectedComponentPropType, gameShape } from 'data/shapes'

import Dashboard from 'Dashboard'
import Footer from 'Footer'

// { dispatch, game }
const Game: SFC = () =>
  <section id="game">
    <Dashboard />
    <Footer />
  </section>

// Game.propTypes = {
//   ...connectedComponentPropType,
//   game: gameShape,
// }
//
// Game.defaultProps = {
//   game: { ...gameInitialState },
// }

export default Game
