import React from 'react'
import PropTypes from 'prop-types'
import axios from 'axios'
import { sessionInitialState } from 'data/initialState'
import { sessionShape, connectedComponentPropType } from 'data/shapes'

import SignIn from 'SignIn'

function WithSession(props) {
  const { children, session } = props
  const { token } = session

  if (!token) return <SignIn />

  axios.defaults.headers.common.Authorization = `Bearer ${token}`

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
