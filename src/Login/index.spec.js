import React from 'react'
import { withMounted, withWrapper } from 'shared/specs'

import Grid from '@material-ui/core/Grid'
import Paper from '@material-ui/core/Paper'

import { Login } from './index.js'

describe('Login', () => {
  const identifier = '#login'
  const subject = () => <Login classes={{ root: '', paper: '' }} />

  withMounted(subject, identifier, (mounted, example) => {
    example.contains('Sign In')
  })

  withWrapper(subject, identifier, wrapper => {
    it('contains a Paper', () => {
      expect(wrapper.find(Paper).length).toBe(1)
    })

    it('contains a Grid', () => {
      expect(wrapper.find(Grid).length).toBeGreaterThan(0)
    })
  })
})
