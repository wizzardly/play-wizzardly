import React, { Component } from 'react'
import { siteInitialState } from 'data/initialState'
import { styledComponentPropType, siteShape } from 'data/shapes'

import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import IconButton from '@material-ui/core/IconButton'
import MenuIcon from '@material-ui/icons/Menu'

import { ShowSignOutDialog } from 'Actions'

import { logoRelief } from 'images'

class Header extends Component {
  handleMenuClick = () => this.props.dispatch(ShowSignOutDialog())

  render() {
    const { classes } = this.props

    return <AppBar id="header" position="static">
      <Toolbar>
        <IconButton
          id="header-menu"
          color="inherit"
          aria-label="open drawer"
          onClick={this.handleMenuClick}
          // className={classNames(classes.menuButton, open && classes.hide)}
        >
          <MenuIcon />
        </IconButton>
        <img id="brand-image" src={logoRelief} alt="wizzard.ly" className={classes.logo} />
      </Toolbar>
    </AppBar>
  }
}

Header.propTypes = {
  ...styledComponentPropType,
  site: siteShape,
}

Header.defaultProps = {
  site: { ...siteInitialState },
}

export default Header
