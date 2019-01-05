import PropTypes from 'prop-types'

const site = PropTypes.shape({
  signingIn: PropTypes.bool,
  signInFailed: PropTypes.bool,
  mainMenuOpen: PropTypes.bool,
  signOutDialogOpen: PropTypes.bool,
})

export default site
