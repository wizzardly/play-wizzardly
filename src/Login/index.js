import React from 'react'
import { styledComponentPropType } from 'shared/shapes'

import { withStyles } from 'material-ui/styles'
import Typography from 'material-ui/Typography'
import Paper from 'material-ui/Paper'
import Grid from 'material-ui/Grid'

import styles from './styles'

export function Login(props) {
  const { classes } = props

  return <div id="login">
    <Grid container justify="center" className={classes.root}>
      <Grid item xs={6}>
        <Paper className={classes.paper}>
          <Typography variant="display3" gutterBottom>
            Sign In
          </Typography>

          Coming Soon
        </Paper>
      </Grid>
    </Grid>
  </div>
}

Login.propTypes = { ...styledComponentPropType }

export default withStyles(styles)(Login)
