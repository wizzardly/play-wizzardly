import { mount, shallow } from 'enzyme'

export function withMounted(subject, identifier, fn) {
  describe('with mounted', () => {
    const mounted = mount(subject())

    it('has the correct identifier', () => {
      expect(mounted.find(identifier).length).toBe(1)
    })

    if (fn) {
      fn(mounted)
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
