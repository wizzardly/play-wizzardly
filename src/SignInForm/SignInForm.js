import React from 'react'
import { siteState } from 'States'
import { connectedComponentProp } from 'props'
import { siteShape } from 'shapes'

import UISignInForm from 'UISignInForm'

import { SignIn } from 'Actions'

function SignInForm({ dispatch, site }) {
  const { signingIn, signInFailed } = site

  return <UISignInForm
    onSubmit={({ email, password }) => dispatch(SignIn(email, password))}
    signInFailed={signInFailed}
    signingIn={signingIn}
  />
}

SignInForm.propTypes = {
  ...connectedComponentProp,
  site: siteShape,
}

SignInForm.defaultProps = {
  site: { ...siteState },
}

export default SignInForm
