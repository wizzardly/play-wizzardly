import { connect } from 'react-redux'
import { withStyles } from '@material-ui/core/styles'

import styles from './styles'

import Masthead from './Masthead'

export default withStyles(styles)(connect()(Masthead))
