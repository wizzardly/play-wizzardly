import React from 'react'
import PropTypes from 'prop-types'
import Drawer from '@material-ui/core/Drawer'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import ListItemText from '@material-ui/core/ListItemText'
import ExitToAppIcon from '@material-ui/icons/ExitToApp'

function UIMainMenu({ isOpen, onCloseClick, onSignOutClick }) {
  return <Drawer
    id="main-menu"
    anchor="left"
    open={isOpen}
    onClose={onCloseClick}
  >
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
