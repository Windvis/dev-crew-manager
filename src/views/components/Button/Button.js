import React from 'react'
import { getButtonClasses } from '../../../utils/button/getButtonClasses'

export function Button ({
  children,
  className,
  buttonStyle = 'success',
  type = 'button',
  clickHandler,
  disabled
}) {
  return (
    <button
      className={getButtonClasses(buttonStyle, className)}
      onClick={clickHandler}
      type={type}
      disabled={disabled}
    >
      {children}
    </button>
  )
}
