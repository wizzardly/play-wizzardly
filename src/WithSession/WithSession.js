import React from 'react'
import PropTypes from 'prop-types'
import { sessionInitialState } from 'data/initialState'
import { sessionShape, connectedComponentPropType } from 'data/shapes'

import SignIn from 'SignIn'

function WithSession(props) {
  const { children, session } = props

  if (!session.token) return <SignIn />

  return children
}

WithSession.propTypes = {
  ...connectedComponentPropType,
  children: PropTypes.node.isRequired,
  session: sessionShape,
}

WithSession.defaultProps = {
  session: { ...sessionInitialState },
}

export default WithSession
