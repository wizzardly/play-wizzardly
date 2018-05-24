import React, { Component } from 'react'
import { authenticationInitialState } from 'data/initialState'
import { connectedComponentPropType, styledComponentPropType, authenticationShape } from 'data/shapes'

import FormGroup from '@material-ui/core/FormGroup'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import CircularProgress from '@material-ui/core/CircularProgress'

import { SignIn } from 'Actions'

export const SIGN_IN_FAIL_ERROR_TEXT = 'Email and password do not match.'

class SignInForm extends Component {
  static propTypes = {
    ...connectedComponentPropType,
    ...styledComponentPropType,
    authentication: authenticationShape,
  }

  static defaultProps = { authentication: { ...authenticationInitialState } }

  state = { email: '', password: '' }

  handleChange = name => event => this.setState({ [name]: event.target.value })

  handleSubmit = event => {
    event.preventDefault()
    const { email, password } = this.state
    this.props.dispatch(SignIn(email, password))
  }

  emailInput(className) {
    const { signingIn, signInFailed } = this.props.authentication

    return <FormGroup>
      <TextField
        id="sign-in-form-email"
        label="Email"
        placeholder="Email"
        className={className}
        disabled={signingIn}
        error={signInFailed}
        value={this.state.email}
        onChange={this.handleChange('email')}
        margin="normal"
        fullWidth
        autoFocus
      />
    </FormGroup>
  }

  passwordInput(className) {
    const { signingIn, signInFailed } = this.props.authentication

    const helperText = signInFailed ? SIGN_IN_FAIL_ERROR_TEXT : ''

    return <FormGroup>
      <TextField
        id="sign-in-form-password"
        label="Password"
        placeholder="Password"
        type="password"
        autoComplete="current-password"
        className={className}
        disabled={signingIn}
        error={signInFailed}
        helperText={helperText}
        value={this.state.password}
        onChange={this.handleChange('password')}
        margin="normal"
        fullWidth
      />
    </FormGroup>
  }

  submitButton(className) {
    const { signingIn } = this.props.authentication
    const { email, password } = this.state

    return <Button
      disabled={signingIn || (!email || !password)}
      id="sign-in-form-submit"
      type="submit"
      size="large"
      color="primary"
      variant="raised"
      className={className}
    >
      {signingIn ? <CircularProgress id="sign-in-loading-spinner" /> : 'Sign In'}
    </Button>
  }

  render() {
    const { classes } = this.props

    return <form id="sign-in-form" onSubmit={this.handleSubmit}>
      {this.emailInput(classes.textField)}
      {this.passwordInput(classes.textField)}
      {this.submitButton(classes.button)}
    </form>
  }
}

export default SignInForm
