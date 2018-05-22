import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Button from '@material-ui/core/Button'
import Dialog from '@material-ui/core/Dialog'
import DialogActions from '@material-ui/core/DialogActions'
import DialogTitle from '@material-ui/core/DialogTitle'
import Slide from '@material-ui/core/Slide'

const Transition = props => <Slide direction="up" {...props} />

class SignOutDialog extends Component {
  static propTypes = { isOpen: PropTypes.bool }

  static defaultProps = { isOpen: false }

  handleClose = () => {

  }

  render() {
    const { isOpen } = this.props

    return <Dialog
      open={isOpen}
      TransitionComponent={Transition}
      keepMounted
      onClose={this.handleClose}
      aria-labelledby="sign-out-dialog-title"
      aria-describedby="sign-out-dialog-description"
    >
      <DialogTitle id="sign-out-dialog-title">
        Are you sure you want to sign out?
      </DialogTitle>
      <DialogActions>
        <Button onClick={this.handleClose} color="default">
          Cancel
        </Button>
        <Button onClick={this.handleSignOut} color="primary">
          Sign Out
        </Button>
      </DialogActions>
    </Dialog>
  }
}

export default SignOutDialog
