import React from 'react'
import { authenticationInitialState } from 'data/initialState'
import { authenticationShape } from 'data/shapes'

import SignIn from 'SignIn'
import Header from 'Header'
import Layout from 'Layout'
import Footer from 'Footer'

function Site(props) {
  const { signedIn } = props.authentication

  if (!signedIn) return <SignIn />

  return <div id="site">
    <Header />
    <Layout />
    <Footer />
  </div>
}

Site.propTypes = {
  authentication: authenticationShape,
}

Site.defaultProps = {
  authentication: { ...authenticationInitialState },
}

export default Site
