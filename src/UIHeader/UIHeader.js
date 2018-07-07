import React from 'react'
import PropTypes from 'prop-types'
import { styledComponentPropType } from 'data/shapes'

import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import IconButton from '@material-ui/core/IconButton'
import MenuIcon from '@material-ui/icons/Menu'

import Image from 'Image'

function UIHeader({ classes, onMenuClick }) {
  return <AppBar id="header" position="static" className={classes.appBar}>
    <Toolbar>
      <IconButton
        id="header-menu"
        color="inherit"
        aria-label="open drawer"
        onClick={onMenuClick}
        className={classes.menuButton}
      >
        <MenuIcon />
      </IconButton>
      <Image id="brand-image" src="logo-relief.png" alt="wizzard.ly" className={classes.logo} />
    </Toolbar>
  </AppBar>
}

UIHeader.propTypes = {
  ...styledComponentPropType,
  onMenuClick: PropTypes.func,
}

UIHeader.defaultProps = {
  onMenuClick: () => {},
}

export default UIHeader
