import React from 'react'

import { MuiThemeProvider } from '@material-ui/core/styles'
import CssBaseline from '@material-ui/core/CssBaseline'

import { styledComponentPropType } from 'data/shapes'

import Site from 'Site'

import theme from './theme'

function Application(props) {
  const { classes } = props

  return <div id="application" className={classes.application}>
    <CssBaseline />
    <MuiThemeProvider theme={theme}>
      <Site />
    </MuiThemeProvider>
  </div>
}

Application.propTypes = { ...styledComponentPropType }

export default Application
