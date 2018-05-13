import React from 'react'
import PropTypes from 'prop-types'

import { withStyles } from 'material-ui/styles'
import Typography from 'material-ui/Typography'
import Paper from 'material-ui/Paper'
import Grid from 'material-ui/Grid'

import styles from './styles'

function Site(props) {
  const { classes } = props

  return <div id="site">
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

Site.propTypes = {
  classes: PropTypes.shape({ root: PropTypes.string, paper: PropTypes.string }).isRequired,
}

export default withStyles(styles)(Site)
