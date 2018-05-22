import { connect } from 'react-redux'
import { withStyles } from '@material-ui/core/styles'

import styles from './styles'

import SignInForm from './SignInForm'

export default connect()(withStyles(styles)(SignInForm))
