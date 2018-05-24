import React, { Component } from 'react'
import classNames from 'classnames'
import { siteInitialState } from 'data/initialState'
import { connectedComponentPropType, styledComponentPropType, siteShape } from 'data/shapes'

import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import IconButton from '@material-ui/core/IconButton'
import MenuIcon from '@material-ui/icons/Menu'

import { ShowMainMenu } from 'Actions'

import { logoRelief } from 'images'

class Header extends Component {
  handleMenuClick = () => this.props.dispatch(ShowMainMenu())

  render() {
    const { classes, site } = this.props
    const { mainMenuOpen } = site

    return <AppBar
      id="header"
      position="static"
      className={classNames(classes.appBar, { [classes.appBarShift]: mainMenuOpen })}
    >
      <Toolbar>
        <IconButton
          id="header-menu"
          color="inherit"
          aria-label="open drawer"
          onClick={this.handleMenuClick}
          className={classNames(classes.menuButton, mainMenuOpen && classes.hide)}
        >
          <MenuIcon />
        </IconButton>
        <img id="brand-image" src={logoRelief} alt="wizzard.ly" className={classes.logo} />
      </Toolbar>
    </AppBar>
  }
}

Header.propTypes = {
  ...connectedComponentPropType,
  ...styledComponentPropType,
  site: siteShape,
}

Header.defaultProps = {
  site: { ...siteInitialState },
}

export default Header
