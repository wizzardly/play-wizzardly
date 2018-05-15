import React from 'react'
import { Provider } from 'react-redux'
import { mount, shallow } from 'enzyme'

import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'

const rendersOne = (source, selector) => expect(source.find(selector).length).toBe(1)

export function withMounted(subject, identifier, fn) {
  describe('with mounted', () => {
    const mounted = mount(subject())

    it('has the correct identifier', () => rendersOne(mounted, identifier))

    if (fn) {
      const contains = text => {
        it('contains the expected text', () => expect(mounted.html()).toContain(text))
      }

      const rendersOne = selector => {
        it('renders the expected selector', () => rendersOne(mounted, selector))
      }

      fn(mounted, { contains, rendersOne })
    }
  })
}

export function withWrapper(subject, identifier, fn) {
  describe('with wrapper', () => {
    const wrapper = shallow(subject())

    it('has the correct identifier', () => expect(wrapper.is(identifier)).toBe(true))

    const rendersOne = selector => {
      it('renders the expected selector', () => rendersOne(wrapper, selector))
    }

    if (fn) {
      fn(wrapper, { rendersOne })
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
