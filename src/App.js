import React, { Component } from 'react'
import { LayoutProvider } from 'react-page-layout'
import './App.css'
import { OverviewPage } from './views/pages/OverviewPage'
import { LAYOUTS } from './config/layouts/index'
import MainLayout from './views/layouts/MainLayout'

const layouts = {
  [LAYOUTS.main.name]: MainLayout
}

console.log(layouts)

class App extends Component {
  render () {
    return (
      <LayoutProvider layouts={layouts}>
        <OverviewPage />
      </LayoutProvider>
    )
  }
}

export default App
