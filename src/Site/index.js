import React from 'react'
import { connect } from 'react-redux'
import initialState from 'Store/initialState'
import authenticationShape from 'Store/shapes'

import Login from 'Login'
import Dashboard from 'Dashboard'

export function Site(props) {
  const { signedIn } = props.authentication

  return <div id="site">
    {signedIn ? <Dashboard /> : <Login />}
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
