import React from 'react'
import { styledComponentProp } from 'props'

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
  ...styledComponentProp,
}

export default Site
