import React from 'react'
import { styledComponentPropType } from 'data/shapes'

import Header from 'Header'
import Layout from 'Layout'
import Modals from 'Modals'

function Site({ classes }) {
  return <div id="site" className={classes.root}>
    <Header />
    <Layout />
    <Modals />
  </div>
}

Site.propTypes = {
  ...styledComponentPropType,
}

export default Site
