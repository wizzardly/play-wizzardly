import React from 'react'
import { withMounted, withWrapper } from 'shared/specs'

import { Site } from './index.js'

describe('Site', () => {
  const identifier = '#site'
  const subject = () => <Site />

  withMounted(subject, identifier, mounted => {
    it('renders Login', () => {
      expect(mounted.find('#login').length).toBe(1)
    })
  })

  withWrapper(subject, identifier)
})
