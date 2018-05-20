import { connect } from 'react-redux'

import Site from './Site'

const mapStateToProps = state => ({ authentication: state.authentication })

export default connect(mapStateToProps)(Site)
