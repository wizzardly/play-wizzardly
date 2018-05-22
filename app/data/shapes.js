import PropTypes from 'prop-types'

export const connectedComponentPropType = {
  dispatch: PropTypes.func.isRequired,
}

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
  signingIn: PropTypes.bool,
  signInFailed: PropTypes.bool,
  token: PropTypes.string,
  currentUser: PropTypes.shape(userShape),
})

export const siteShape = PropTypes.shape({
  mainMenuOpen: PropTypes.bool,
})
