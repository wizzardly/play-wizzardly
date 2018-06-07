import { connect } from 'react-redux'
import { withStyles } from '@material-ui/core/styles'

import styles from '../UIHeader/styles'

import Header from './Header'

const mapStateToProps = state => ({ site: state.site })

export default withStyles(styles)(connect(mapStateToProps)(Header))
