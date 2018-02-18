import React from 'react'
import classNames from 'classnames'

export function Button ({
  children,
  className,
  type = 'success',
  clickHandler
}) {
  return (
    <button
      className={
        classNames(
          'button', {
            'button--success': type === 'success',
            'button--danger': type === 'danger'
          },
          className
        )
      }
      onClick={clickHandler}
    >
      {children}
    </button>
  )
}
