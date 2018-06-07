import React from 'react'
import { authenticationInitialState } from 'data/initialState'
import { styledComponentPropType, authenticationShape } from 'data/shapes'

import Header from 'Header'
import Layout from 'Layout'
import Modals from 'Modals'

function Site(props) {
  return <div id="site" className={props.classes.root}>
    <Header />
    <Layout />
    <Modals />
  </div>
}

Site.propTypes = {
  ...styledComponentPropType,
}

export default Site
