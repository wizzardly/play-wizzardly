import { connect } from 'react-redux'
import { withStyles } from '@material-ui/core/styles'

import styles from './styles'

import MainContent from './MainContent'

const mapStateToProps = state => ({ site: state.site })

export default withStyles(styles)(connect(mapStateToProps)(MainContent))
