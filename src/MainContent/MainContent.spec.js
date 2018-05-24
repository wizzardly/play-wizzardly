import React from 'react'
import { shallow } from 'enzyme'
import { siteInitialState } from 'data/initialState'

import Footer from 'Footer'
import Dashboard from 'Dashboard'

import MainContent from './MainContent'

describe('MainContent', () => {
  const subject = (dispatch, site = { ...siteInitialState }, classes = {}) =>
    <MainContent classes={classes} dispatch={dispatch} site={site} />

  describe('when shallow rendered', () => {
    const wrapper = shallow(subject(() => {}))

    it('has the expected selector', () => expect(wrapper.is('#main-content')).toBe(true))
    it('renders Dashboard', () => expect(wrapper.find(Dashboard)).toExist())
    it('renders Footer', () => expect(wrapper.find(Footer)).toExist())
  })

  describe('when shallow rendered', () => {
    const site = { ...siteInitialState }
    const classes = { content: 'content', contentShift: 'contentShift' }

    const wrapper = shallow(subject(() => {}, site, classes))

    it('is an unshifted app bar', () => {
      expect(wrapper.hasClass(classes.content)).toBe(true)
      expect(wrapper.hasClass(classes.contentShift)).toBe(false)
    })
  })

  describe('when shallow rendered and opened', () => {
    const site = { ...siteInitialState, mainMenuOpen: true }
    const classes = { content: 'content', contentShift: 'contentShift' }

    const wrapper = shallow(subject(() => {}, site, classes))

    it('is a shifted content section', () => {
      expect(wrapper.hasClass(classes.content)).toBe(true)
      expect(wrapper.hasClass(classes.contentShift)).toBe(true)
    })
  })
})
