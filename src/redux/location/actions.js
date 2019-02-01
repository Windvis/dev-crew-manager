import {
  R_UPDATE_DEVELOPER_INFO,
  R_OVERVIEW,
  R_HIRE_DEVELOPER
} from '../../config/routing/route-types'

export function navigateTo (routeType, payload) {
  return {
    type: routeType,
    payload
  }
}

export function navigateToOverviewPage () {
  return navigateTo(R_OVERVIEW)
}

export function navigateToHirePage (developerId) {
  return navigateTo(R_HIRE_DEVELOPER)
}

export function navigateToUpdatePage (developerId) {
  return navigateTo(R_UPDATE_DEVELOPER_INFO, {
    id: developerId
  })
}
