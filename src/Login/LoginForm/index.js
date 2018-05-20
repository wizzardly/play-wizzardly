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
    console.log('state at signin', this.state)
  }

  render() {
    const { classes } = this.props
    const { email, password } = this.state

    return <form id="login-form" onSubmit={this.handleSubmit}>
      <TextField
        id="email"
        label="Email"
        placeholder="Email"
        className={classes.textField}
        value={email}
        onChange={this.handleChange('email')}
        margin="normal"
        fullWidth
        autoFocus
      />

      <TextField
        id="password"
        label="Password"
        className={classes.textField}
        type="password"
        autoComplete="current-password"
        placeholder="Password"
        value={password}
        onChange={this.handleChange('password')}
        margin="normal"
        fullWidth
      />

      <Button size="large" className={classes.button} type="submit" color="primary" variant="raised">
        Sign In
      </Button>
    </form>
  }
}

export default withStyles(styles)(Form)
