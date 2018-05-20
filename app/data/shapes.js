import PropTypes from 'prop-types'

export const styledComponentPropType = {
  classes: PropTypes.objectOf(PropTypes.string).isRequired,
}

export const userShape = PropTypes.shape({
  first_name: PropTypes.string.isRequired,
  last_name: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
})

export const authenticationShape = PropTypes.shape({
  signedIn: PropTypes.bool,
  token: PropTypes.string,
  currentUser: PropTypes.shape(userShape),
})

