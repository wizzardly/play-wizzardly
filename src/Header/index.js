import { connect } from 'react-redux'
import { withStyles } from '@material-ui/core/styles'

import styles from './styles'

import Header from './Header'

export default withStyles(styles)(connect()(Header))
