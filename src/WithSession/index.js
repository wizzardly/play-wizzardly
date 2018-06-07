import { connect } from 'react-redux'

import WithSession from './WithSession'

const mapStateToProps = state => ({ session: state.session })

export default connect(mapStateToProps)(WithSession)
