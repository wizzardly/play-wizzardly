import React from 'react'
import { mount, shallow } from 'enzyme'

import UIHeader from './UIHeader'

describe('UIHeader', () => {
  const subject = (onMenuClick = () => {}, classes = {}) => <UIHeader onMenuClick={onMenuClick} classes={classes} />

  describe('when mounted', () => {
    const onMenuClick = jest.fn()
    const mounted = mount(subject(onMenuClick))

    it('calls onMenuClick when header menu button is clicked', () => {
      mounted.find('button#header-menu').simulate('click')
      expect(onMenuClick).toHaveBeenCalled()
    })

    it('renders the brand image', () => expect(mounted.find('img#brand-image').prop('alt')).toBe('wizzard.ly'))
  })
})
