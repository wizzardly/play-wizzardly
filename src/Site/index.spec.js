import React from 'react'
import { withMounted, withWrapper } from 'shared/specs'

import { Site } from './index.js'

describe('Site', () => {
  const identifier = '#site'
  const subject = props => <Site {...props} />
  const signedOutSubject = () => subject({ authentication: { signedIn: false } })
  const signedInSubject = () => subject({ authentication: { signedIn: true } })

  withMounted(signedOutSubject, identifier, (mounted, example) => {
    example.rendersOne('#login')
  })

  withMounted(signedInSubject, identifier, (mounted, example) => {
    example.rendersOne('#dashboard')
  })

  withWrapper(subject, identifier)
})
