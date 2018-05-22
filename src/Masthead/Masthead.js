import React, { Component } from 'react'
import { styledComponentPropType } from 'data/shapes'

import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import IconButton from '@material-ui/core/IconButton'
import AccountCircle from '@material-ui/icons/AccountCircle'
import MenuItem from '@material-ui/core/MenuItem'
import Menu from '@material-ui/core/Menu'

import { SignOut } from 'Actions'

import { logoRelief } from 'images'

class Masthead extends Component {
  state = { menuAnchor: null }

  handleMenuClick = event => this.setState({ menuAnchor: event.currentTarget })
  handleMenuClose = () => this.setState({ menuAnchor: null })

  handleSignOutClick = () => {
    this.props.dispatch(SignOut())
  }

  render() {
    const { classes } = this.props
    const { menuAnchor } = this.state

    const menuOpen = Boolean(menuAnchor)

    return <header id="masthead" className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <div className={classes.brand}>
            <img id="brand-image" src={logoRelief} alt="wizzard.ly" className={classes.logo} />
          </div>
          <div>
            <IconButton
              id="masthead-user-menu-trigger"
              aria-owns={menuOpen ? 'menu-appbar' : null}
              aria-haspopup="true"
              onClick={this.handleMenuClick}
              color="inherit"
            >
              <AccountCircle />
            </IconButton>
            <Menu
              id="masthead-user-menu"
              anchorEl={menuAnchor}
              anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
              transformOrigin={{ vertical: 'top', horizontal: 'right' }}
              open={menuOpen}
              onClose={this.handleMenuClose}
            >
              <MenuItem id="masthead-user-menu-sign-out" onClick={this.handleSignOutClick}>Sign Out</MenuItem>
            </Menu>
          </div>
        </Toolbar>
      </AppBar>
    </header>
  }
}

Masthead.propTypes = { ...styledComponentPropType }

export default Masthead
