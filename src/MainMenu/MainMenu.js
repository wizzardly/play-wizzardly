import React from 'react'
import { siteState } from 'States'
import { connectedComponentProp } from 'props'
import { siteShape } from 'shapes'
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
  ...connectedComponentProp,
  site: siteShape,
}

MainMenu.defaultProps = {
  site: { ...siteState },
}

export default MainMenu
