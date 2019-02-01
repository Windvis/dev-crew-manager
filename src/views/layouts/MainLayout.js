import React from 'react'
import classNames from 'classnames'
import { Slot } from 'react-page-layout'
import { Header } from '../components/Header/Header'

export default function MainLayout (props) {
  const { className } = props

  return (
    <div {...props} className={classNames('main-layout', className)}>
      <Slot
        name='header'
        component='header'
        wrapper={<Header />}
        className='main-layout__header'
      />
      <Slot name='content' component='main' className='main-layout__content' />
    </div>
  )
}
