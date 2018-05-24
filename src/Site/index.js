import { withStyles } from '@material-ui/core/styles'
import { connect } from 'react-redux'

import styles from './styles'

import Site from './Site'

const mapStateToProps = state => ({ authentication: state.authentication })

export default withStyles(styles)(connect(mapStateToProps)(Site))
