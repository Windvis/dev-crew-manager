import React from 'react'
import { connect } from 'react-redux'
import { LayoutProvider } from 'react-page-layout'
import { LAYOUTS } from '../../../config/layouts'
import MainLayout from '../../layouts/MainLayout'
import { getRouteType } from '../../../redux/location/selectors'
import getRouteData from '../../../utils/routing/getRouteData'

const layouts = {
  [LAYOUTS.main.name]: MainLayout
}

function PageManager ({ PageComponent }) {
  return (
    <LayoutProvider layouts={layouts}>
      {PageComponent ? <PageComponent /> : null}
    </LayoutProvider>
  )
}

function mapStateToProps (state) {
  const routeType = getRouteType(state)
  const { page } = getRouteData(routeType)

  return {
    PageComponent: page
  }
}

export default connect(mapStateToProps)(PageManager)
