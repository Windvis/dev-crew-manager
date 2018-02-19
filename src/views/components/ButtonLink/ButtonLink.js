import React from 'react'
import Link from 'redux-first-router-link'
import { getButtonClasses } from '../../../utils/button/getButtonClasses'

export function ButtonLink (props) {
  const {
    children,
    className,
    type = 'success'
  } = props

  return (
    <Link className={getButtonClasses(type, className)} {...props}>{children}</Link>
  )
}
