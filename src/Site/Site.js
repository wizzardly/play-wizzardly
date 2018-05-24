import React from 'react'
import { authenticationInitialState } from 'data/initialState'
import { styledComponentPropType, authenticationShape } from 'data/shapes'

import SignIn from 'SignIn'
import Header from 'Header'
import Layout from 'Layout'
import Modals from 'Modals'

function Site(props) {
  const { classes, authentication } = props
  const { signedIn } = authentication

  if (!signedIn) return <SignIn />

  return <div id="site" className={classes.root}>
    <Header />
    <Layout />
    <Modals />
  </div>
}

Site.propTypes = {
  ...styledComponentPropType,
  authentication: authenticationShape,
}

Site.defaultProps = {
  authentication: { ...authenticationInitialState },
}

export default Site
