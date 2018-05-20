import React from 'react'
import { styledComponentPropType } from 'data/shapes'

import Paper from '@material-ui/core/Paper'
import Grid from '@material-ui/core/Grid'

import { logo } from 'images'

import LoginForm from 'LoginForm'

function Login(props) {
  const { classes } = props

  return <div id="login" className={classes.container}>
    <Grid container justify="center" alignItems="center" className={classes.root}>
      <Paper className={classes.paper} elevation={12}>
        <img src={logo} alt="wizzard.ly" />

        <LoginForm />
      </Paper>
    </Grid>
  </div>
}

Login.propTypes = { ...styledComponentPropType }

export default Login
