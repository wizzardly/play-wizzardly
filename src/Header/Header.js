import React, { Component } from 'react'
import { siteInitialState } from 'data/initialState'
import { styledComponentPropType, siteShape } from 'data/shapes'

import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'

import { logoRelief } from 'images'

class Masthead extends Component {
  render() {
    const { classes } = this.props

    return <AppBar id="header" position="static">
      <Toolbar>
        <div className={classes.brand}>
          <img id="brand-image" src={logoRelief} alt="wizzard.ly" className={classes.logo} />
        </div>
      </Toolbar>
    </AppBar>
  }
}

Masthead.propTypes = {
  ...styledComponentPropType,
  site: siteShape,
}

Masthead.defaultProps = {
  site: { ...siteInitialState },
}

export default Masthead
