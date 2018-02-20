import {
  R_OVERVIEW,
  R_HIRE_DEVELOPER,
  R_UPDATE_DEVELOPER_INFO
} from './route-types'
import OverviewPage from '../../views/pages/OverviewPage'
import HireDeveloperPage from '../../views/pages/HireDeveloperPage'
import UpdateDeveloperInfoPage from '../../views/pages/UpdateDeveloperInfoPage'

export const ROUTES = {
  [R_OVERVIEW]: {
    path: '/',
    page: OverviewPage
  },
  [R_HIRE_DEVELOPER]: {
    path: '/developer/hire',
    page: HireDeveloperPage
  },
  [R_UPDATE_DEVELOPER_INFO]: {
    path: '/developer/:id/update',
    page: UpdateDeveloperInfoPage
  }
}
