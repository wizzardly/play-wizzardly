import React from 'react'
import { styledComponentProp } from 'props'

// import Game from 'Game'

function UIMainContent({ classes }) {
  return <section id="main-content" className={classes.content}>
    <div className={classes.drawerHeader} />
    {/*<Game />*/}
  </section>
}

UIMainContent.propTypes = {
  ...styledComponentProp,
}

UIMainContent.defaultProps = {}

export default UIMainContent
