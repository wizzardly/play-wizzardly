import { connect } from 'react-redux'
import { withStyles } from '@material-ui/core/styles'

import styles from './styles'

import LoginForm from './LoginForm'

export default connect()(withStyles(styles)(LoginForm))
