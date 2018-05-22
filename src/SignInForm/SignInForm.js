import React, { Component } from 'react'
import { connectedComponentPropType, styledComponentPropType } from 'data/shapes'

import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'

import { SignIn } from 'Actions'

class SignInForm extends Component {
  static propTypes = { ...connectedComponentPropType, ...styledComponentPropType }

  state = { email: '', password: '' }

  handleChange = name => event => this.setState({ [name]: event.target.value })

  handleSubmit = event => {
    event.preventDefault()
    const { email, password } = this.state
    this.props.dispatch(SignIn(email, password))
  }

  emailInput(className) {
    return <TextField
      id="sign-in-form-email"
      label="Email"
      placeholder="Email"
      className={className}
      value={this.state.email}
      onChange={this.handleChange('email')}
      margin="normal"
      fullWidth
      autoFocus
    />
  }

  passwordInput(className) {
    return <TextField
      id="sign-in-form-password"
      label="Password"
      placeholder="Password"
      type="password"
      autoComplete="current-password"
      className={className}
      value={this.state.password}
      onChange={this.handleChange('password')}
      margin="normal"
      fullWidth
    />
  }

  submitButton(className) {
    const { email, password } = this.state

    return <Button
      disabled={!email || !password}
      id="sign-in-form-submit"
      type="submit"
      size="large"
      color="primary"
      variant="raised"
      className={className}
    >
      Sign In
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
