import React from 'react'
import Link from 'redux-first-router-link'
import { getButtonClasses } from '../../../utils/button/getButtonClasses'

export function ButtonLink (props) {
  const { children, className, buttonStyle = 'success', ...otherProps } = props

  return (
    <Link className={getButtonClasses(buttonStyle, className)} {...otherProps}>
      {children}
    </Link>
  )
}
