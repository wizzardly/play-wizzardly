import React from 'react'
import { withMounted } from 'shared/specs'

import { FormInputText } from './index.js'

describe('FormInputText', () => {
  const identifier = '[name="test-name"]'
  const subject = () => <FormInputText name="test-name" label="Test Name" classes={{ formControl: '' }} />

  withMounted(subject, identifier, mounted => {

  })
})
