import React from 'react'
import { Provider } from 'react-redux'
import { mount, shallow } from 'enzyme'

import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'

export function withMounted(subject, identifier, fn) {
  describe('with mounted', () => {
    const mounted = mount(subject())

    it('has the correct identifier', () => {
      expect(mounted.find(identifier).length).toBe(1)
    })

    if (fn) {
      const contains = text => {
        it('contains the expected text', () => {
          expect(mounted.html()).toContain(text)
        })
      }

      const rendersOne = selector => {
        it('renders the expected selector', () => {
          expect(mounted.find(selector).length).toBe(1)
        })
      }

      fn(mounted, { contains, rendersOne })
    }
  })
}

export function withWrapper(subject, identifier, fn) {
  describe('with wrapper', () => {
    const wrapper = shallow(subject())

    it('has the correct identifier', () => {
      expect(wrapper.is(identifier)).toBe(true)
    })

    if (fn) {
      fn(wrapper)
    }
  })
}

export function provideMockedStore(subject, fn) {
  if (!fn) {
    throw new Error('provideMockedStore requires a callback')
  }

  const middlewares = [thunk]
  const mockStore = configureMockStore(middlewares)

  const store = mockStore()

  fn(() => <Provider store={store}>{subject()}</Provider>)
}

export function withMountedHavingMockedStore(subject, identifier, fn) {
  provideMockedStore(subject, subjectWithMockedStore => withMounted(subjectWithMockedStore, identifier, fn))
}
