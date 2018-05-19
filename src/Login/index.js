import React from 'react'
import { styledComponentPropType } from 'shared/shapes'

import { withStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'
import Paper from '@material-ui/core/Paper'
import Grid from '@material-ui/core/Grid'

import { wand } from '../images'

import LoginForm from './LoginForm'

import styles from './styles'

export function Login(props) {
  const { classes } = props

  return <div id="login">
    <Grid container justify="center" className={classes.root}>
      <Grid item xs={10} sm={8} md={6} lg={4}>
        <Paper className={classes.paper}>
          <Typography variant="display1" gutterBottom>
            <img src={wand} />
            Sign In
          </Typography>

          <LoginForm />
        </Paper>
      </Grid>
    </Grid>
  </div>
}

Login.propTypes = { ...styledComponentPropType }

export default withStyles(styles)(Login)
