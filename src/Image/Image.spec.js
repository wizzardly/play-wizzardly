import React from 'react'
import faker from 'faker'
import { mount } from 'enzyme'

import Image, { BASE_URL } from './Image'

describe('Image', () => {
  const subject = (src, alt) => <Image src={src} alt={alt} />

  describe('when mounted', () => {
    const src = `${faker.random.uuid()}.png`
    const alt = faker.lorem.sentence()
    const wrapper = mount(subject(src, alt))
    const html = wrapper.html()

    it('renders an img', () => expect(html).toContain(`<img src="${BASE_URL}/${src}" alt="${alt}">`))
  })
})
