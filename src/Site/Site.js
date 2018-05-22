import React from 'react'
import initialState from 'data/initialState'
import { authenticationShape } from 'data/shapes'

import SignIn from 'SignIn'
import Dashboard from 'Dashboard'
import Masthead from 'Masthead'
import Mastfoot from 'Mastfoot'

function Site(props) {
  const { signedIn } = props.authentication

  if (!signedIn) return <SignIn />

  return <div id="site">
    <Masthead />
    <Dashboard />
    <Mastfoot />
  </div>
}

Site.propTypes = {
  authentication: authenticationShape,
}

Site.defaultProps = {
  authentication: { ...initialState.authentication },
}

export default Site
