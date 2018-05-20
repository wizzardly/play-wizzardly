import React, { Component } from 'react'
import { styledComponentPropType } from 'shared/shapes'

import { withStyles } from '@material-ui/core/styles'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'

import styles from './styles'

export class LoginForm extends Component {
  static propTypes = { ...styledComponentPropType }

  state = { email: '', password: '' }

  handleChange = name => event => this.setState({ [name]: event.target.value })

  handleSubmit = event => {
    event.preventDefault()
    this.signIn()
  }

  signIn() {
    console.log('state at signin', this.state) // eslint-disable-line no-console
  }

  emailInput(className) {
    return <TextField
      id="email"
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
      className={className}
      id="password"
      label="Password"
      placeholder="Password"
      type="password"
      autoComplete="current-password"
      value={this.state.password}
      onChange={this.handleChange('password')}
      margin="normal"
      fullWidth
    />
  }

  submitButton(className) {
    return <Button
      className={className}
      id="login-form-submit"
      size="large"
      type="submit"
      color="primary"
      variant="raised"
    >
      Sign In
    </Button>
  }

  render() {
    const { classes } = this.props

    return <form id="login-form" onSubmit={this.handleSubmit}>
      {this.emailInput(classes.textField)}
      {this.passwordInput(classes.textField)}
      {this.submitButton(classes.button)}
    </form>
  }
}

export default withStyles(styles)(LoginForm)
