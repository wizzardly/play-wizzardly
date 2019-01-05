import React from 'react'
import { connectedComponentProp } from 'props'

import { ShowMainMenu } from 'Actions'
import UIHeader from 'UIHeader'

function Header({ dispatch }) {
  return <UIHeader onMenuClick={() => dispatch(ShowMainMenu())} />
}

Header.propTypes = {
  ...connectedComponentProp,
}

Header.defaultProps = {}

export default Header
