import React from 'react'
import { withMounted } from 'shared/specs'

import { FormInputText } from './index.js'

describe('FormInputText', () => {
  const exampleName = 'test-name'
  const exampleLabel = 'Test Name'
  const identifier = `[name="${exampleName}"]`
  const subject = () => <FormInputText name={exampleName} label={exampleLabel} classes={{ formControl: '' }} />

  withMounted(subject, identifier, (mounted, example) => {
    example.contains(exampleLabel)

    // TODO: check input exist
      // TODO: check placeholder gets used
      // TODO: check value is assigned
      // TODO: Check value change works
    // TODO: check label exists
      // TODO: Check label for correct properties
  })
})
