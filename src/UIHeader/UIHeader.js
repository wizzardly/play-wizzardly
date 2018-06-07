import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import { styledComponentPropType } from 'data/shapes'

import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import IconButton from '@material-ui/core/IconButton'
import MenuIcon from '@material-ui/icons/Menu'

import { logoRelief } from 'images'

function UIHeader({ classes, isShifted, onMenuClick }) {
  return <AppBar
    id="header"
    position="static"
    className={classNames(classes.appBar, { [classes.appBarShift]: isShifted })}
  >
    <Toolbar>
      <IconButton
        id="header-menu"
        color="inherit"
        aria-label="open drawer"
        onClick={onMenuClick}
        className={classNames(classes.menuButton, isShifted && classes.hide)}
      >
        <MenuIcon />
      </IconButton>
      <img id="brand-image" src={logoRelief} alt="wizzard.ly" className={classes.logo} />
    </Toolbar>
  </AppBar>
}

UIHeader.propTypes = {
  ...styledComponentPropType,
  onMenuClick: PropTypes.func,
  isShifted: PropTypes.bool,
}

UIHeader.defaultProps = {
  onMenuClick: () => {},
  isShifted: false,
}

export default UIHeader
