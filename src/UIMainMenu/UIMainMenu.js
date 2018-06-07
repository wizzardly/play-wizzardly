import React from 'react'
import PropTypes from 'prop-types'
import Drawer from '@material-ui/core/Drawer'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import ListItemText from '@material-ui/core/ListItemText'
import ExitToAppIcon from '@material-ui/icons/ExitToApp'
import IconButton from '@material-ui/core/IconButton'
import Divider from '@material-ui/core/Divider'
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft'
import { styledComponentPropType } from 'data/shapes'

function UIMainMenu({ classes, isOpen, onCloseClick, onSignOutClick }) {
  return <Drawer
    id="main-menu"
    variant="persistent"
    anchor="left"
    open={isOpen}
    classes={{ paper: classes.drawerPaper }}
  >
    <div className={classes.drawerHeader}>
      <IconButton id="main-menu-close" onClick={onCloseClick}>
        <ChevronLeftIcon />
      </IconButton>
    </div>
    <Divider />
    <List>
      <ListItem id="main-menu-sign-out" button onClick={onSignOutClick}>
        <ListItemIcon>
          <ExitToAppIcon />
        </ListItemIcon>
        <ListItemText inset primary="Sign Out" />
      </ListItem>
    </List>
  </Drawer>
}

UIMainMenu.propTypes = {
  ...styledComponentPropType,
  isOpen: PropTypes.bool,
  onCloseClick: PropTypes.func,
  onSignOutClick: PropTypes.func,
}

UIMainMenu.defaultProps = {
  isOpen: false,
  onCloseClick: () => {},
  onSignOutClick: () => {},
}

export default UIMainMenu
