import React from 'react'
import { styledComponentPropType } from 'shared/shapes'

import { withStyles } from '@material-ui/core/styles'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'

import styles from './styles'

// import Button from '@material-ui/core/Button'
// <Button color="inherit">Login</Button>

// import IconButton from '@material-ui/core/IconButton'
// import MenuIcon from '@material-ui/icons/Menu'
// <IconButton className={classes.menuButton} color="inherit" aria-label="Menu">
//   <MenuIcon />
// </IconButton>

export function Masthead(props) {
  const { classes } = props

  return <header id="masthead" className={classes.root}>
    <AppBar position="static">
      <Toolbar>
        <Typography variant="title" color="inherit" align="center" className={classes.flex}>
          wizzard.ly
        </Typography>
      </Toolbar>
    </AppBar>
  </header>
}

Masthead.propTypes = { ...styledComponentPropType }

export default withStyles(styles)(Masthead)
