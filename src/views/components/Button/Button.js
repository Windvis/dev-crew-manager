import React from 'react'
import { getButtonClasses } from '../../../utils/button/getButtonClasses'

export function Button ({
  children,
  className,
  type = 'success',
  clickHandler
}) {
  return (
    <button
      className={getButtonClasses(type, className)}
      onClick={clickHandler}
    >
      {children}
    </button>
  )
}
