import React from 'react'
import { withMounted, withWrapper } from 'shared/specs'

import Grid from '@material-ui/core/Grid'
import Paper from '@material-ui/core/Paper'

import { Dashboard } from './index.js'

describe('Dashboard', () => {
  const identifier = '#dashboard'
  const subject = () => <Dashboard classes={{ root: '', paper: '' }} />

  withMounted(subject, identifier, (mounted, example) => {
    example.contains('Welcome')
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
