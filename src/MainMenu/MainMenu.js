import React from 'react'
import { siteInitialState } from 'data/initialState'
import { connectedComponentPropType, siteShape } from 'data/shapes'
import { HideMainMenu, ShowSignOutDialog } from 'Actions'

import UIMainMenu from 'UIMainMenu'

function MainMenu({ dispatch, site }) {
  return <UIMainMenu
    isOpen={site.mainMenuOpen}
    onCloseClick={() => dispatch(HideMainMenu())}
    onSignOutClick={() => dispatch(ShowSignOutDialog())}
  />
}

MainMenu.propTypes = {
  ...connectedComponentPropType,
  site: siteShape,
}

MainMenu.defaultProps = {
  site: { ...siteInitialState },
}

export default MainMenu
