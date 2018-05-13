import React from 'react'
import PropTypes from 'prop-types'

import { withStyles } from 'material-ui/styles'
import Grid from 'material-ui/Grid'
import Paper from 'material-ui/Paper'

import styles from './styles'

function Site(props) {
  const { classes } = props

  return <div id="site">
    <Grid container spacing={24}>
      <Grid item xs={12}>
        <Paper elevation={0} className={classes.paper}>xs=12</Paper>
      </Grid>
    </Grid>
  </div>
}

Site.propTypes = {
  classes: PropTypes.shape({ root: PropTypes.string, paper: PropTypes.string }).isRequired,
}

export default withStyles(styles)(Site)
