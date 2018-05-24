import React from 'react'
import { mount, shallow } from 'enzyme'
import thunk from 'redux-thunk'
import configureMockStore from 'redux-mock-store'
import { siteInitialState } from 'data/initialState'

import { MAIN_MENU_SHOW } from 'Actions'

import Header from './Header'

const mockStore = configureMockStore([thunk])

describe('Header', () => {
  const subject = (dispatch, site = { ...siteInitialState }, classes = {}) =>
    <Header dispatch={dispatch} classes={classes} site={site} />

  describe('when mounted', () => {
    const mounted = mount(subject(() => {}))

    it('renders the brand image', () => expect(mounted.find('#brand-image').prop('alt')).toBe('wizzard.ly'))
  })

  describe('when mounted with a store', () => {
    let store
    let mounted

    beforeEach(() => {
      store = mockStore()
      mounted = mount(subject(store.dispatch))
    })

    it('calls the MAIN_MENU_SHOW action', () => {
      mounted.find('button#header-menu').simulate('click')

      expect(store.getActions()).toEqual([{ type: MAIN_MENU_SHOW }])
    })
  })

  describe('when shallow rendered', () => {
    const site = { ...siteInitialState }
    const classes = { appBar: 'appBar', appBarShift: 'appBarShift' }

    const wrapper = shallow(subject(() => {}, site, classes))

    it('has the expected selector', () => expect(wrapper.is('#header')).toBe(true))

    it('is an unshifted app bar', () => {
      expect(wrapper.hasClass(classes.appBar)).toBe(true)
      expect(wrapper.hasClass(classes.appBarShift)).toBe(false)
    })
  })

  describe('when shallow rendered and opened', () => {
    const site = { ...siteInitialState, mainMenuOpen: true }
    const classes = { appBar: 'appBar', appBarShift: 'appBarShift' }

    const wrapper = shallow(subject(() => {}, site, classes))

    it('is a shifted app bar', () => {
      expect(wrapper.hasClass(classes.appBar)).toBe(true)
      expect(wrapper.hasClass(classes.appBarShift)).toBe(true)
    })
  })
})
