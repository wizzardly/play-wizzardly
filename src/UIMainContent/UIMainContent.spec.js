import React from 'react'
import { shallow } from 'enzyme'

import Game from 'Game'

import UIMainContent from './UIMainContent'

describe('UIMainContent', () => {
  const subject = (isShifted = false, classes = {}) => <UIMainContent isShifted={isShifted} classes={classes} />

  describe('when shallow rendered and NOT open', () => {
    const classes = { content: 'content', contentShift: 'contentShift' }
    const wrapper = shallow(subject(false, classes))

    it('has the expected selector', () => expect(wrapper.is('#main-content')).toBe(true))
    it('renders Game', () => expect(wrapper.find(Game)).toExist())
    it('is an unshifted app bar', () => {
      expect(wrapper.hasClass(classes.content)).toBe(true)
      expect(wrapper.hasClass(classes.contentShift)).toBe(false)
    })
  })

  describe('when shallow rendered and opened', () => {
    const classes = { content: 'content', contentShift: 'contentShift' }
    const wrapper = shallow(subject(true, classes))

    it('is a shifted content section', () => {
      expect(wrapper.hasClass(classes.content)).toBe(true)
      expect(wrapper.hasClass(classes.contentShift)).toBe(true)
    })
  })
})
