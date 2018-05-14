import React from 'react'
import { withMounted, withWrapper } from 'shared/specs'

import { Site } from './index.js'

describe('Site', () => {
  const identifier = '#site'
  const subject = props => <Site {...props} />
  const signedOutSubject = () => subject({ authentication: { signedIn: false } })
  const signedInSubject = () => subject({ authentication: { signedIn: true } })

  withMounted(signedOutSubject, identifier, mounted => {
    it('renders Login', () => {
      expect(mounted.find('#login').length).toBe(1)
    })
  })

  withMounted(signedInSubject, identifier, mounted => {
    it('renders Dashboard', () => {
      expect(mounted.find('#dashboard').length).toBe(1)
    })
  })

  withWrapper(subject, identifier)
})
