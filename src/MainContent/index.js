import { connect } from 'react-redux'

import MainContent from './MainContent'

const mapStateToProps = state => ({ site: state.site })

export default connect(mapStateToProps)(MainContent)
