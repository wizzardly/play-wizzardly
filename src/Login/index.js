import React from 'react'
import { styledComponentPropType } from 'shared/shapes'

import { withStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'
import Paper from '@material-ui/core/Paper'
import Grid from '@material-ui/core/Grid'
// import FormInputText from 'FormInputText'

import styles from './styles'

export function Login(props) {
  const { classes } = props

  // <FormInputText name="email" label="Email" />
  //   <FormInputText name="password" label="Password" />

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
