import React from 'react'
import { withMounted, withWrapper } from 'shared/specs'

import Grid from 'material-ui/Grid'
import Paper from 'material-ui/Paper'

import { Site } from './index.js'

describe('Site', () => {
  const identifier = '#site'
  const subject = () => <Site classes={{ root: '', paper: '' }} />

  withMounted(subject, identifier, mounted => {
    it('renders a sign in page', () => {
      expect(mounted.html()).toContain('Sign In')
    })
  })

  withWrapper(subject, identifier, wrapper => {
    it('contains a Paper', () => {
      expect(wrapper.find(Paper).length).toBe(1)
    })

    it('contains a Grid', () => {
      expect(wrapper.find(Grid).length).toBeGreaterThan(0);
    })
  })
})
