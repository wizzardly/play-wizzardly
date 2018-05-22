import { connect } from 'react-redux'

import SignOutDialog from './SignOutDialog'

const mapStateToProps = state => ({ site: state.site })

export default connect(mapStateToProps)(SignOutDialog)
