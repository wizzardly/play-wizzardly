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

export const sessionShape = PropTypes.shape({
  token: PropTypes.string,
})

export const siteShape = PropTypes.shape({
  signingIn: PropTypes.bool,
  signInFailed: PropTypes.bool,
  mainMenuOpen: PropTypes.bool,
  signOutDialogOpen: PropTypes.bool,
})

export const gameShape = PropTypes.shape({
})
