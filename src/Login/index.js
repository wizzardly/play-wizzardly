import React from 'react'
import { styledComponentPropType } from 'shared/shapes'

import { withStyles } from '@material-ui/core/styles'
import Paper from '@material-ui/core/Paper'
import Grid from '@material-ui/core/Grid'

import { logo } from 'shared/images'

import LoginForm from './LoginForm'

import styles from './styles'

export function Login(props) {
  const { classes } = props

  return <div id="login" className={classes.container}>
    <Grid container justify="center" alignItems="center" className={classes.root}>
      <Paper className={classes.paper} elevation12>
        <img src={logo} alt="wizzard.ly" />

        <LoginForm />
      </Paper>
    </Grid>
  </div>
}

Login.propTypes = { ...styledComponentPropType }

export default withStyles(styles)(Login)
