import React from 'react'
import { styledComponentPropType } from 'data/shapes'

import Game from 'Game'

function UIMainContent({ classes }) {
  return <section id="main-content" className={classes.content}>
    <div className={classes.drawerHeader} />
    <Game />
  </section>
}

UIMainContent.propTypes = {
  ...styledComponentPropType,
}

UIMainContent.defaultProps = {}

export default UIMainContent
