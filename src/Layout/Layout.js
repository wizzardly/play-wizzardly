import React from 'react'
import { styledComponentPropType } from 'data/shapes'

import MainMenu from 'MainMenu'
import MainContent from 'MainContent'

function Layout(props) {
  const { classes } = props

  return <div id="layout" className={classes.layout}>
    <MainMenu />
    <MainContent />
  </div>
}

Layout.propTypes = { ...styledComponentPropType }

export default Layout
