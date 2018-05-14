import React from 'react'
import { withMounted, withWrapper } from 'shared/specs'

import Mastfoot from './index.js'

describe('Mastfoot', () => {
  const identifier = '#mastfoot'
  const subject = () => <Mastfoot />

  withMounted(subject, identifier, mounted => {
    it('renders the copyright', () => {
      expect(mounted.html()).toContain('Copyright © 2018')
    })
  })

  withWrapper(subject, identifier)
})
