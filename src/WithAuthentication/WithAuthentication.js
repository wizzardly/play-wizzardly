import React from 'react'
import PropTypes from 'prop-types'
import { authenticationInitialState } from 'data/initialState'
import { authenticationShape } from 'data/shapes'

import SignIn from 'SignIn'

function WithAuthentication(props) {
  const { children, authentication } = props

  if (!authentication.signedIn) return <SignIn />

  return children
}

WithAuthentication.propTypes = {
  children: PropTypes.node,
  authentication: authenticationShape,
}

WithAuthentication.defaultProps = {
  authentication: { ...authenticationInitialState },
}

export default WithAuthentication
