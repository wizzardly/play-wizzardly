import React, { Component } from 'react'
import { styledComponentPropType } from 'shared/shapes'

import { withStyles } from '@material-ui/core/styles'
import TextField from '@material-ui/core/TextField'

import styles from './styles'

export class Form extends Component {
  static propTypes = { ...styledComponentPropType }

  state = { email: '', password: '' }

  handleChange = name => event => this.setState({ [name]: event.target.value })

  render() {
    const { classes } = this.props
    const { email, password } = this.state

    return <form id="login-form">
      <TextField
        id="email"
        label="Email"
        placeholder="Email"
        className={classes.textField}
        value={email}
        onChange={this.handleChange('email')}
        margin="normal"
        fullWidth
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
    </form>
  }
}

export default withStyles(styles)(Form)
