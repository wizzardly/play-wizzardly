import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import { styledComponentPropType } from 'data/shapes'

import Dashboard from 'Dashboard'
import Footer from 'Footer'

function UIMainContent({ isShifted, classes }) {
  return <section id="main-content" className={classNames(classes.content, { [classes.contentShift]: isShifted })}>
    <div className={classes.drawerHeader} />
    <Dashboard />
    <Footer />
  </section>
}

UIMainContent.propTypes = {
  ...styledComponentPropType,
  isShifted: PropTypes.bool,
}

UIMainContent.defaultProps = {
  isShifted: false,
}

export default UIMainContent
