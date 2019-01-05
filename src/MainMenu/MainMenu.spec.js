import React from 'react'
import { mount, shallow } from 'enzyme'
import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import { siteState } from 'States'

import UIMainMenu from 'UIMainMenu'

import { SIGN_OUT_DIALOG_SHOW, MAIN_MENU_HIDE } from 'Actions'

import MainMenu from './MainMenu'

const mockStore = configureMockStore([thunk])

describe('MainMenu', () => {
  const subject = (dispatch = () => {}, site = { ...siteState }) => <MainMenu dispatch={dispatch} site={site} />

  describe('when shallow rendered', () => {
    const wrapper = shallow(subject())

    it('renders a closed UIMainMenu', () => expect(wrapper.find(UIMainMenu).props().isOpen).toBe(false))
  })

  describe('when shallow rendered and mainMenuOpen', () => {
    const wrapper = shallow(subject(() => {}, { ...siteState, mainMenuOpen: true }))

    it('renders an open UIMainMenu', () => expect(wrapper.find(UIMainMenu).props().isOpen).toBe(true))
  })

  describe('when mounted with a store', () => {
    let store
    let mounted

    beforeEach(() => {
      store = mockStore()
      mounted = mount(subject(store.dispatch))
    })

    it('calls the MAIN_MENU_HIDE action', () => {
      mounted.find(UIMainMenu).props().onCloseClick()
      expect(store.getActions()).toEqual([{ type: MAIN_MENU_HIDE }])
    })

    it('calls the MAIN_MENU_OPEN action', () => {
      mounted.find(UIMainMenu).props().onSignOutClick()
      expect(store.getActions()).toEqual([{ type: SIGN_OUT_DIALOG_SHOW }])
    })
  })
})
