import PropTypes from 'prop-types'

import { userShape } from 'shared/shapes'

const authenticationShape = PropTypes.shape({
  signedIn: PropTypes.bool,
  token: PropTypes.string,
  currentUser: PropTypes.shape(userShape),
})

export default authenticationShape
