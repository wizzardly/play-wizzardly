import React from 'react'
import { siteInitialState } from 'data/initialState'
import { connectedComponentPropType, siteShape } from 'data/shapes'

import { ShowMainMenu } from 'Actions'
import UIHeader from 'UIHeader'

function Header({ dispatch, site }) {
  return <UIHeader isShifted={site.mainMenuOpen} onMenuClick={() => dispatch(ShowMainMenu())} />
}

Header.propTypes = {
  ...connectedComponentPropType,
  site: siteShape,
}

Header.defaultProps = {
  site: { ...siteInitialState },
}

export default Header
