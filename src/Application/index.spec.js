import React from 'react'
import { withMounted, withWrapper } from 'shared/specs'

import Application from './index.js'

describe('Application', () => {
  const identifier = '#application'
  const subject = () => <Application />

  withMounted(subject, identifier, mounted => {
    it('renders Masthead', () => {
      expect(mounted.find('#masthead').length).toBe(1)
    })

    it('renders Mastfoot', () => {
      expect(mounted.find('#mastfoot').length).toBe(1)
    })

    it('renders Site', () => {
      expect(mounted.find('#site').length).toBe(1)
    })
  })

  withWrapper(subject, identifier)
})
