import { connect } from 'react-redux'

import Game from './Game'

const mapStateToProps = state => ({ game: state.game })

export default connect(mapStateToProps)(Game)
