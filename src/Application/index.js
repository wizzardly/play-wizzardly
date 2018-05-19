import React from 'react'

import { MuiThemeProvider } from '@material-ui/core/styles'
import CssBaseline from '@material-ui/core/CssBaseline'

import Masthead from 'Masthead'
import Site from 'Site'
import Mastfoot from 'Mastfoot'

import theme from './theme'

export default () =>
  <MuiThemeProvider theme={theme}>
    <div id="application">
      <CssBaseline />
      <Masthead />
      <Site />
      <Mastfoot />
    </div>
  </MuiThemeProvider>
