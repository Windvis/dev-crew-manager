import React, { Fragment } from 'react'
import convertObjectToSelectOptions from '../../../../utils/developers/convertObjectToSelectOptions'
import { ROLES } from '../../../../config/developers/roles'
import { FRAMEWORKS } from '../../../../config/developers/frameworks'
import { SelectField } from './SelectField'
import { TextField } from './TextField'
import { convertSelectDataToValue } from '../../../../utils/forms/select/convertSelectDataToValue'

export const defaultFieldValues = {
  firstName: '',
  lastName: '',
  role: '',
  frameworks: []
}

export const preSubmit = {
  role: convertSelectDataToValue,
  frameworks: convertSelectDataToValue
}

export function DeveloperFields ({formApi}) {
  return (
    <Fragment>
      <div className='form-group'>
        <TextField
          name='firstName'
          label='First Name'
        />
      </div>

      <div className='form-group'>
        <TextField
          name='lastName'
          label='Last Name'
        />
      </div>

      <div className='form-group'>
        <SelectField
          label='Role'
          name='role'
          options={convertObjectToSelectOptions(ROLES)}
        />
      </div>

      <div className='form-group'>
        <SelectField
          label='Frameworks'
          name='frameworks'
          multi
          options={convertObjectToSelectOptions(FRAMEWORKS)}
        />
      </div>
    </Fragment>

  )
}
