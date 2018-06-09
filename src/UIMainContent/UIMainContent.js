import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import { styledComponentPropType } from 'data/shapes'

import Game from 'Game'

function UIMainContent({ isShifted, classes }) {
  return <section id="main-content" className={classNames(classes.content, { [classes.contentShift]: isShifted })}>
    <div className={classes.drawerHeader} />
    <Game />
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
