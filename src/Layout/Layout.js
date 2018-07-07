import React from 'react'
import { styledComponentPropType } from 'data/shapes'

import MainMenu from 'MainMenu'
import UIMainContent from 'UIMainContent'

function Layout(props) {
  const { classes } = props

  return <div id="layout" className={classes.layout}>
    <MainMenu />
    <UIMainContent />
  </div>
}

Layout.propTypes = { ...styledComponentPropType }

export default Layout
