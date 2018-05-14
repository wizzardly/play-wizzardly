import React from 'react'
import styledComponentShape from 'shared/shapes'

import { withStyles } from 'material-ui/styles'
import Typography from 'material-ui/Typography'
import Paper from 'material-ui/Paper'
import Grid from 'material-ui/Grid'

import styles from './styles'

export function Dashboard(props) {
  const { classes } = props

  return <div id="dashboard">
    <Grid container justify="center" className={classes.root}>
      <Grid item xs={6}>
        <Paper className={classes.paper}>
          <Typography variant="display3" gutterBottom>
            Welcome
          </Typography>

          You Are Here
        </Paper>
      </Grid>
    </Grid>
  </div>
}

Dashboard.propTypes = { ...styledComponentShape }

export default withStyles(styles)(Dashboard)
