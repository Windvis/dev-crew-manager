import React from 'react'
import { Slot } from 'react-page-layout'

export default function MainLayout () {
  return (
    <div className='main-layout'>
      <Slot name='header' component='header' className='main-layout__header' />
      <Slot name='content' component='main' className='main-layout__header' />
    </div>
  )
}
