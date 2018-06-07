import React from 'react'
import { mount, shallow } from 'enzyme'

import UIHeader from './UIHeader'

describe('UIHeader', () => {
  const subject = (onMenuClick = () => {}, isShifted = false, classes = {}) =>
    <UIHeader onMenuClick={onMenuClick} isShifted={isShifted} classes={classes} />

  describe('when mounted', () => {
    const onMenuClick = jest.fn()
    const mounted = mount(subject(onMenuClick))

    it('calls onMenuClick when header menu button is clicked', () => {
      mounted.find('button#header-menu').simulate('click')
      expect(onMenuClick).toHaveBeenCalled()
    })

    it('renders the brand image', () => expect(mounted.find('img#brand-image').prop('alt')).toBe('wizzard.ly'))
  })

  describe('when shallow rendered and not shifted', () => {
    const classes = { appBar: 'appBar', appBarShift: 'appBarShift' }
    const wrapper = shallow(subject(() => {}, false, classes))

    it('has the expected selector', () => expect(wrapper.is('#header')).toBe(true))

    it('is an unshifted app bar', () => {
      expect(wrapper.hasClass(classes.appBar)).toBe(true)
      expect(wrapper.hasClass(classes.appBarShift)).toBe(false)
    })
  })

  describe('when shallow rendered and shifted', () => {
    const classes = { appBar: 'appBar', appBarShift: 'appBarShift' }
    const wrapper = shallow(subject(() => {}, true, classes))

    it('is a shifted app bar', () => {
      expect(wrapper.hasClass(classes.appBar)).toBe(true)
      expect(wrapper.hasClass(classes.appBarShift)).toBe(true)
    })
  })
})
