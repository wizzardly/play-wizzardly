import { connect } from 'react-redux'
import { withStyles } from '@material-ui/core/styles'

import styles from './styles'

import SignInForm from './SignInForm'

const mapStateToProps = state => ({ authentication: state.authentication })

export default withStyles(styles)(connect(mapStateToProps)(SignInForm))
