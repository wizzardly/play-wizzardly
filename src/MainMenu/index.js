import { connect } from 'react-redux'

import MainMenu from './MainMenu'

const mapStateToProps = state => ({ site: state.site })

export default connect(mapStateToProps)(MainMenu)
