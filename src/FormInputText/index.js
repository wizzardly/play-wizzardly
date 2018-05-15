import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { styledComponentPropType } from 'shared/shapes'

import { withStyles } from '@material-ui/core/styles'
import Input from '@material-ui/core/Input'
import InputLabel from '@material-ui/core/InputLabel'
// import FormHelperText from '@material-ui/core/FormHelperText'
import FormControl from '@material-ui/core/FormControl'

import styles from './styles'

export class FormInputText extends Component {
  static propTypes = { // eslint-disable-line no-undef
    ...styledComponentPropType,
    name: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    value: PropTypes.string,
    placeholder: PropTypes.string,
  }

  static defaultProps = { value: '', placeholder: '' } // eslint-disable-line no-undef

  constructor(props) {
    super(props)
    this.handleChange = this.handleChange.bind(this)
  }

  state = { // eslint-disable-line no-undef
    value: '',
  }

  handleChange(event) {
    this.setState({ value: event.target.value })
  }

  render() {
    const { classes, name, label, value, placeholder } = this.props

    return <FormControl className={classes.formControl}>
      <InputLabel htmlFor={name}>{label}</InputLabel>
      <Input name={name} value={value} placeholder={placeholder} onChange={this.handleChange} />
    </FormControl>
  }
}

export default withStyles(styles)(FormInputText)
