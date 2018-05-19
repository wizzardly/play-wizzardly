import React from 'react'

import { withStyles, MuiThemeProvider } from '@material-ui/core/styles'
import CssBaseline from '@material-ui/core/CssBaseline'

import { styledComponentPropType } from 'shared/shapes'

import Site from 'Site'

import theme from './theme'
import styles from './styles'

export function Application(props) {
  const { classes } = props

  return <MuiThemeProvider theme={theme}>
    <div id="application" className={classes.application}>
      <CssBaseline />
      <Site />
    </div>
  </MuiThemeProvider>
}

Application.propTypes = { ...styledComponentPropType }

export default withStyles(styles)(Application)
