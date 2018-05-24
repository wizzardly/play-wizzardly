import { connect } from 'react-redux'
import { withStyles } from '@material-ui/core/styles'

import styles from './styles'

import MainMenu from './MainMenu'

const mapStateToProps = state => ({ site: state.site })

export default withStyles(styles)(connect(mapStateToProps)(MainMenu))
