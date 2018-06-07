import { connect } from 'react-redux'

import SignInForm from './SignInForm'

const mapStateToProps = state => ({ site: state.site })

export default connect(mapStateToProps)(SignInForm)
