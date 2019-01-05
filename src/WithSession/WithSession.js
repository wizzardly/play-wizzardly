import React from 'react'
import PropTypes from 'prop-types'
import axios from 'axios'
import { sessionState } from 'States'
import { connectedComponentProp } from 'props'
import { sessionShape } from 'shapes'

import SignIn from 'SignIn'

function WithSession(props) {
  const { children, session } = props
  const { token } = session

  if (!token) return <SignIn />

  axios.defaults.headers.common.Authorization = `Bearer ${token}`

  return children
}

WithSession.propTypes = {
  ...connectedComponentProp,
  children: PropTypes.node.isRequired,
  session: sessionShape,
}

WithSession.defaultProps = {
  session: { ...sessionState },
}

export default WithSession
