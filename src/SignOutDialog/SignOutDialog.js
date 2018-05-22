import React, { Component } from 'react'
import Button from '@material-ui/core/Button'
import Dialog from '@material-ui/core/Dialog'
import DialogActions from '@material-ui/core/DialogActions'
import DialogTitle from '@material-ui/core/DialogTitle'
import Slide from '@material-ui/core/Slide'
import { siteInitialState } from 'data/initialState'
import { connectedComponentPropType, siteShape } from 'data/shapes'

const Transition = props => <Slide direction="up" {...props} />

class SignOutDialog extends Component {
  static propTypes = {
    ...connectedComponentPropType,
    site: siteShape,
  }

  static defaultProps = {
    site: { ...siteInitialState },
  }

  handleClose = () => {

  }

  handleSignOut = () => {

  }

  render() {
    const { signOutDialogOpen } = this.props.site

    return <Dialog
      open={signOutDialogOpen}
      TransitionComponent={Transition}
      keepMounted
      onClose={this.handleClose}
      aria-labelledby="sign-out-dialog-title"
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
