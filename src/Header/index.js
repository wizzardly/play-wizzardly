import { connect } from 'react-redux'

import Header from './Header'

const mapStateToProps = state => ({ site: state.site })

export default connect(mapStateToProps)(Header)
