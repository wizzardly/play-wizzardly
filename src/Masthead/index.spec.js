import React from 'react'
import { withMounted, withWrapper } from 'shared/specs'

import AppBar from 'material-ui/AppBar'

import { Masthead } from './index.js'

describe('Masthead', () => {
  const identifier = '#masthead'
  const subject = () => <Masthead classes={{ root: '', flex: '' }} />

  withMounted(subject, identifier, (mounted, example) => {
    example.contains('wizzard.ly')
  })

  withWrapper(subject, identifier, wrapper => {
    it('contains an AppBar', () => {
      expect(wrapper.find(AppBar).length).toBe(1)
    })
  })
})
