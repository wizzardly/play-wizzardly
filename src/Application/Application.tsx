import React, { SFC } from 'react'

import CssBaseline from '@material-ui/core/CssBaseline'
import { MuiThemeProvider } from '@material-ui/core/styles'

import Site from 'Site'
import WithSession from 'WithSession'

import theme from './theme'

interface ApplicationClasses { application: string }
interface ApplicationProps {
  classes: ApplicationClasses
}

const Application: SFC<ApplicationProps> = ({ classes }) =>
  <div id="application" className={classes.application}>
    <MuiThemeProvider theme={theme}>
      <CssBaseline />
      <WithSession>
        <Site />
      </WithSession>
    </MuiThemeProvider>
  </div>

export default Application
