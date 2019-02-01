import React from 'react'

export function IconHeading ({ icon, children }) {
  return (
    <h1 className='icon-heading'>
      <span className='icon-heading__icon'>{icon}</span>
      {children}
    </h1>
  )
}
