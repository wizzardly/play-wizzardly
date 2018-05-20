import React, { Component } from 'react'
import { styledComponentPropType } from 'shared/shapes'

import { withStyles } from '@material-ui/core/styles'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'

import styles from './styles'

export class Form extends Component {
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
      id="password"
      label="Password"
      placeholder="Password"
      className={className}
      type="password"
      autoComplete="current-password"
      value={this.state.password}
      onChange={this.handleChange('password')}
      margin="normal"
      fullWidth
    />
  }

  render() {
    const { classes } = this.props

    return <form id="login-form" onSubmit={this.handleSubmit}>
      {this.emailInput(classes.textField)}
      {this.passwordInput(classes.textField)}

      <Button size="large" className={classes.button} type="submit" color="primary" variant="raised">
        Sign In
      </Button>
    </form>
  }
}

export default withStyles(styles)(Form)
