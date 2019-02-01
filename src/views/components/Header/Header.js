import React from 'react'

export function Header ({ children }) {
  return (
    <header className='main-layout__header'>
      <div className='container'>{children}</div>
    </header>
  )
}
