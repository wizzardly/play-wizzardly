import React from 'react'
import { styledComponentProp } from 'props'

import MainMenu from 'MainMenu'
import UIMainContent from 'UIMainContent'

function Layout(props) {
  const { classes } = props

  return <div id="layout" className={classes.layout}>
    <MainMenu />
    <UIMainContent />
  </div>
}

Layout.propTypes = { ...styledComponentProp }

export default Layout
