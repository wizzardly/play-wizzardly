import React from 'react'
import { mount } from 'enzyme'
import Application from './index.js'

describe('Application', () => {
  const subject = () => <Application />

  describe('rendering', () => {
    let mounted

    beforeAll(() => {
      mounted = mount(subject())
    })

    it('renders without error', () => {
      expect(mounted.html()).toContain('Hello, World!')
    })
  })
})
