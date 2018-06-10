import * as React from 'react'

import CssBaseline from '@material-ui/core/CssBaseline'
import { MuiThemeProvider } from '@material-ui/core/styles'

import Site from 'Site'
import WithSession from 'WithSession'

import theme from './theme'

interface IApplicationClasses { application: string; }
interface IApplication {
  classes: IApplicationClasses;
}

function Application({ classes }: IApplication) {
  return <div id="application" className={classes.application}>
    <CssBaseline />
    <MuiThemeProvider theme={theme}>
      <WithSession>
        <Site />
      </WithSession>
    </MuiThemeProvider>
  </div>
}

export default Application
