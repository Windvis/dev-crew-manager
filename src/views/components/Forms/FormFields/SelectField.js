import React, { Fragment } from 'react'
import { Field } from 'react-form'
import Select from 'react-select'
import is from '../../../../utils/general/is'
import classNames from 'classnames'
import { convertSelectDataToValue } from '../../../../utils/forms/select/convertSelectDataToValue'

export function SelectField ({ name, label = '', ...selectProps }) {
  return (
    <Field field={name}>
      {fieldApi => {
        const { value, setValue, setTouched } = fieldApi

        return (
          <Fragment>
            {label !== '' ? (
              <label htmlFor={name} className='label'>
                {label}
              </label>
            ) : null}
            {renderFieldMessage(fieldApi)}
            <Select
              id={name}
              name={name}
              value={value}
              className={classNames({
                'select-field--with-errors': showErrorMessage(fieldApi)
              })}
              onChange={newValue => {
                setValue(convertSelectDataToValue(newValue))
              }}
              onBlur={() => setTouched(true)}
              {...selectProps}
            />
          </Fragment>
        )
      }}
    </Field>
  )
}

function renderFieldMessage (fieldApi) {
  if (showErrorMessage(fieldApi)) {
    return <span className='message message--error'>{fieldApi.error}</span>
  }

  return null
}

function showErrorMessage ({ touched, error }) {
  return touched && is.set(error)
}
