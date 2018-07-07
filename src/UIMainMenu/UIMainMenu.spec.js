import React from 'react'
import { mount, shallow } from 'enzyme'

import UIMainMenu from './UIMainMenu'

describe('UIMainMenu', () => {
  const subject = (onCloseClick = () => {}, onSignOutClick = () => {}, isOpen = false, classes = {}) =>
    <UIMainMenu onCloseClick={onCloseClick} onSignOutClick={onSignOutClick} isOpen={isOpen} classes={classes} />

  const mainMenuSelector = 'div#main-menu'
  const signOutButtonSelector = 'div#main-menu-sign-out'

  describe('when mounted', () => {
    const onCloseClick = jest.fn()
    const onSignOutClick = jest.fn()
    const mounted = mount(subject(onCloseClick, onSignOutClick, true))

    describe('onCloseClick', () => {
      // The first child of the modal is the backdrop, and clicking on it makes the drawer go away
      beforeEach(() => mounted.find(mainMenuSelector).childAt(0).simulate('click'))
      it('triggers MAIN_MENU_HIDE', () => expect(onCloseClick).toHaveBeenCalled())
    })

    describe('onSignOutClick', () => {
      beforeEach(() => mounted.find(signOutButtonSelector).simulate('click'))
      it('triggers SIGN_OUT_DIALOG_HIDE', () => expect(onSignOutClick).toHaveBeenCalled())
    })
  })

  describe('when shallow rendered and not open', () => {
    const wrapper = shallow(subject())

    it('has the expected selector', () => expect(wrapper.is('#main-menu')).toBe(true))
  })

  describe('when shallow rendered and open', () => {
    const wrapper = shallow(subject(() => {}, () => {}, true))

    it('is open', () => expect(wrapper.prop('open')).toBe(true))
  })

  describe('when shallow rendered and NOT open', () => {
    const wrapper = shallow(subject(() => {}, () => {}, false))

    it('is NOT open', () => expect(wrapper.prop('open')).toBe(false))
  })
})
