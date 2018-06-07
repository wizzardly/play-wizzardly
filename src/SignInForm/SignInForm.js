import React from 'react'
import { siteInitialState } from 'data/initialState'
import { connectedComponentPropType, siteShape } from 'data/shapes'

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
  ...connectedComponentPropType,
  site: siteShape,
}

SignInForm.defaultProps = {
  site: { ...siteInitialState },
}

export default SignInForm
