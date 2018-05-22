import React from 'react'
import { styledComponentPropType } from 'data/shapes'

import Paper from '@material-ui/core/Paper'
import Grid from '@material-ui/core/Grid'

import { logo } from 'images'

import SignInForm from 'SignInForm'

function SignIn(props) {
  const { classes } = props

  return <div id="sign-in" className={classes.container}>
    <Grid container justify="center" alignItems="center" className={classes.root}>
      <Paper className={classes.paper} elevation={12}>
        <img src={logo} alt="wizzard.ly" />

        <SignInForm />
      </Paper>
    </Grid>
  </div>
}

SignIn.propTypes = { ...styledComponentPropType }

export default SignIn
