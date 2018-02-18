import React from 'react'
import { Slot } from 'react-page-layout'
import { Header } from '../components/Header/Header'

export default function MainLayout () {
  return (
    <div className='main-layout'>
      <Slot name='header' component='header' wrapper={<Header/>} className='main-layout__header' />
      <Slot name='content' component='main' className='main-layout__content' />
    </div>
  )
}
