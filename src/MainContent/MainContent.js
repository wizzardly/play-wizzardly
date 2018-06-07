import React from 'react'
import { siteInitialState } from 'data/initialState'
import { connectedComponentPropType, siteShape } from 'data/shapes'

import UIMainContent from 'UIMainContent'

function MainContent({ site }) {
  return <UIMainContent isShifted={site.mainMenuOpen} />
}

MainContent.propTypes = {
  ...connectedComponentPropType,
  site: siteShape,
}

MainContent.defaultProps = {
  site: { ...siteInitialState },
}

export default MainContent
