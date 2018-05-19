import React from 'react'
import { styledComponentPropType } from 'shared/shapes'

import { withStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'
import Paper from '@material-ui/core/Paper'
import Grid from '@material-ui/core/Grid'

import styles from './styles'

export function Dashboard(props) {
  const { classes } = props

  return <div id="dashboard">
    <Grid container justify="center" alignItems="center" className={classes.root}>
      <Paper className={classes.paper} elevation12>
        <Typography variant="display4" align="center">
          Coming Soon
        </Typography>
      </Paper>
    </Grid>
  </div>
}

Dashboard.propTypes = { ...styledComponentPropType }

export default withStyles(styles)(Dashboard)
