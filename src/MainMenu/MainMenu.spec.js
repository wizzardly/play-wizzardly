import React from 'react'
import { mount, shallow } from 'enzyme'
import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import { siteInitialState } from 'data/initialState'

import { SIGN_OUT_DIALOG_SHOW, MAIN_MENU_HIDE } from 'Actions'

import MainMenu from './MainMenu'

const mockStore = configureMockStore([thunk])

describe('MainMenu', () => {
  const subject = (dispatch, site = { ...siteInitialState }) =>
    <MainMenu classes={{}} dispatch={dispatch} site={site} />

  const closeButtonSelector = 'button#main-menu-close'
  const signOutButtonSelector = 'div#main-menu-sign-out'

  describe('when mounted with a store', () => {
    let store
    let mounted

    beforeEach(() => {
      store = mockStore()
      mounted = mount(subject(store.dispatch))
    })

    describe('on chevron', () => {
      beforeEach(() => mounted.find(closeButtonSelector).simulate('click'))
      it('triggers MAIN_MENU_HIDE', () => expect(store.getActions()).toEqual([{ type: MAIN_MENU_HIDE }]))
    })

    describe('on sign out', () => {
      beforeEach(() => mounted.find(signOutButtonSelector).simulate('click'))
      it('triggers SIGN_OUT_DIALOG_HIDE', () => expect(store.getActions()).toEqual([{ type: SIGN_OUT_DIALOG_SHOW }]))
    })
  })

  describe('when shallow rendered', () => {
    const wrapper = shallow(subject(() => {}))

    it('has the expected selector', () => expect(wrapper.is('#main-menu')).toBe(true))
  })

  describe('when shallow rendered and open', () => {
    const wrapper = shallow(subject(() => {}, { ...siteInitialState, mainMenuOpen: true }))

    it('is open', () => expect(wrapper.prop('open')).toBe(true))
  })

  describe('when shallow rendered and NOT open', () => {
    const wrapper = shallow(subject(() => {}, { ...siteInitialState }))

    it('is open', () => expect(wrapper.prop('open')).toBe(false))
  })
})
