import React from 'react'
import { connect } from 'react-redux'
import initialState from 'Store/initialState'
import authenticationShape from 'Store/shapes'

import Login from 'Login'
import Dashboard from 'Dashboard'
import Masthead from 'Masthead'
import Mastfoot from 'Mastfoot'

export function Site(props) {
  const { signedIn } = props.authentication

  if (!signedIn) return <Login />

  return <div id="site">
    <Masthead />
    <Mastfoot />
    <Dashboard />
  </div>
}

Site.propTypes = {
  authentication: authenticationShape,
}

Site.defaultProps = {
  authentication: { ...initialState.authentication },
}

const mapStateToProps = state => ({ authentication: state.authentication })

export default connect(mapStateToProps)(Site)
