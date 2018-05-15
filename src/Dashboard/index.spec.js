import React from 'react'
import { withMounted, withWrapper } from 'shared/specs'

import Dashboard from './index.js'

describe('Dashboard', () => {
  const identifier = '#dashboard'
  const subject = () => <Dashboard classes={{ root: '', paper: '' }} />

  withMounted(subject, identifier, (mounted, example) => {
    example.contains('Welcome!')
  })

  withWrapper(subject, identifier)
})
