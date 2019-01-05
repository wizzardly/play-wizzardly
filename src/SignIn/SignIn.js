import React from 'react'
import { styledComponentProp } from 'props'

import Paper from '@material-ui/core/Paper'
import Grid from '@material-ui/core/Grid'

import Image from 'Image'
import SignInForm from 'SignInForm'

function SignIn(props) {
  const { classes } = props

  return <div id="sign-in" className={classes.container}>
    <Grid container justify="center" alignItems="center" className={classes.root}>
      <Paper className={classes.paper} elevation={12}>
        <Image src="logo.png" alt="wizzard.ly" className={classes.logo} />

        <SignInForm />
      </Paper>
    </Grid>
  </div>
}

SignIn.propTypes = { ...styledComponentProp }

export default SignIn
