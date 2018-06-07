import { connect } from 'react-redux'

import WithAuthentication from './WithAuthentication'

const mapStateToProps = state => ({ authentication: state.authentication })

export default connect(mapStateToProps)(WithAuthentication)
