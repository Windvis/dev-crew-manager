import React, { Fragment } from 'react'
import { Field } from 'react-form'
import classNames from 'classnames'
import is from '../../../../utils/general/is'

export function TextField ({ name, label = '', type = 'text', ...otherProps }) {
  return (
    <Field field={name}>
      {fieldApi => {
        const { value = '', setValue, setTouched } = fieldApi

        return (
          <Fragment>
            {label !== '' ? (
              <label className='label' htmlFor={name}>
                {label}
              </label>
            ) : null}
            {renderFieldMessage(fieldApi)}
            <input
              id={name}
              type={type}
              value={value}
              className={classNames('field', {
                'field--with-errors': showErrorMessage(fieldApi)
              })}
              onChange={event => {
                setTouched(true)
                setValue(event.target.value)
              }}
              onBlur={() => setTouched(true)}
              {...otherProps}
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
