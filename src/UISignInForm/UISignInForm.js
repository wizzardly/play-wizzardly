import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { styledComponentProp } from 'props'

import FormGroup from '@material-ui/core/FormGroup'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import CircularProgress from '@material-ui/core/CircularProgress'

export const SIGN_IN_FAIL_ERROR_TEXT = 'A problem occurred trying to sign in.'

export default class UISignInForm extends Component {
  static propTypes = {
    ...styledComponentProp,
    onSubmit: PropTypes.func,
    signingIn: PropTypes.bool,
    signInFailed: PropTypes.bool,
  }

  static defaultProps = {
    onSubmit: () => {},
    signingIn: false,
    signInFailed: false,
  }

  state = { email: '', password: '' }

  handleChange = name => event => this.setState({ [name]: event.target.value })

  handleSubmit = event => {
    event.preventDefault()
    const { email, password } = this.state
    this.props.onSubmit({ email, password })
  }

  emailInput(signingIn, signInFailed, className) {
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

  passwordInput(signingIn, signInFailed, className) {
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

  submitButton(signingIn, className) {
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
    const { classes, signingIn, signInFailed } = this.props

    return <form id="sign-in-form" onSubmit={this.handleSubmit}>
      {this.emailInput(signingIn, signInFailed, classes.textField)}
      {this.passwordInput(signingIn, signInFailed, classes.textField)}
      {this.submitButton(signingIn, classes.button)}
    </form>
  }
}
