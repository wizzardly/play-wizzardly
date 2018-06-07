import React from 'react'
import { mount, shallow } from 'enzyme'
import thunk from 'redux-thunk'
import configureMockStore from 'redux-mock-store'
import { siteInitialState } from 'data/initialState'

import UIHeader from 'UIHeader'

import { MAIN_MENU_SHOW } from 'Actions'

import Header from './Header'

const mockStore = configureMockStore([thunk])

describe('Header', () => {
  const subject = (dispatch = () => {}, site = { ...siteInitialState }) => <Header dispatch={dispatch} site={site} />

  describe('when shallow rendered', () => {
    const wrapper = shallow(subject())

    it('renders an unshifted UIHeader', () => expect(wrapper.find(UIHeader).props().isShifted).toBe(false))
  })

  describe('when shallow rendered and mainMenuOpen', () => {
    const wrapper = shallow(subject(() => {}, { ...siteInitialState, mainMenuOpen: true }))

    it('renders an unshifted UIHeader', () => expect(wrapper.find(UIHeader).props().isShifted).toBe(true))
  })

  describe('when mounted with a store', () => {
    let store
    let mounted

    beforeEach(() => {
      store = mockStore()
      mounted = mount(subject(store.dispatch))
    })

    it('calls the MAIN_MENU_SHOW action', () => {
      mounted.find(UIHeader).props().onMenuClick()
      expect(store.getActions()).toEqual([{ type: MAIN_MENU_SHOW }])
    })
  })
})
