import React, { Component } from 'react'
import Drawer from '@material-ui/core/Drawer'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import ListItemText from '@material-ui/core/ListItemText'
import ExitToAppIcon from '@material-ui/icons/ExitToApp'
import IconButton from '@material-ui/core/IconButton'
import Divider from '@material-ui/core/Divider'
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft'
import { siteInitialState } from 'data/initialState'
import { connectedComponentPropType, styledComponentPropType, siteShape } from 'data/shapes'
import { HideMainMenu, ShowSignOutDialog } from 'Actions'

class MainMenu extends Component {
  static propTypes = {
    ...connectedComponentPropType,
    ...styledComponentPropType,
    site: siteShape,
  }

  static defaultProps = {
    site: { ...siteInitialState },
  }

  handleClose = () => this.props.dispatch(HideMainMenu())

  handleSignOut = () => this.props.dispatch(ShowSignOutDialog())

  render() {
    const { classes, site } = this.props
    const { mainMenuOpen } = site

    return <Drawer
      id="main-menu"
      variant="persistent"
      anchor="left"
      open={mainMenuOpen}
      classes={{ paper: classes.drawerPaper }}
    >
      <div className={classes.drawerHeader}>
        <IconButton id="main-menu-close" onClick={this.handleClose}>
          <ChevronLeftIcon />
        </IconButton>
      </div>
      <Divider />
      <List>
        <ListItem id="main-menu-sign-out" button onClick={this.handleSignOut}>
          <ListItemIcon>
            <ExitToAppIcon />
          </ListItemIcon>
          <ListItemText inset primary="Sign Out" />
        </ListItem>
      </List>
    </Drawer>
  }
}

export default MainMenu
