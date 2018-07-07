import React from 'react'
import { connectedComponentPropType } from 'data/shapes'

import { ShowMainMenu } from 'Actions'
import UIHeader from 'UIHeader'

function Header({ dispatch }) {
  return <UIHeader onMenuClick={() => dispatch(ShowMainMenu())} />
}

Header.propTypes = {
  ...connectedComponentPropType,
}

Header.defaultProps = {}

export default Header
