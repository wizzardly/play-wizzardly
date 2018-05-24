import React from 'react'
import classNames from 'classnames'
import { siteInitialState } from 'data/initialState'
import { connectedComponentPropType, styledComponentPropType, siteShape } from 'data/shapes'

import Dashboard from 'Dashboard'
import Footer from 'Footer'

function MainContent(props) {
  const { classes, site } = props
  const { mainMenuOpen } = site

  return <section id="main-content" className={classNames(classes.content, { [classes.contentShift]: mainMenuOpen })}>
    <div className={classes.drawerHeader} />
    <Dashboard />
    <Footer />
  </section>
}

MainContent.propTypes = {
  ...connectedComponentPropType,
  ...styledComponentPropType,
  site: siteShape,
}

MainContent.defaultProps = {
  site: { ...siteInitialState },
}

export default MainContent
