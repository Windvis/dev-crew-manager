import { createAction } from '../../utils/redux/createAction'
import { FIRE_DEVELOPER, HIRE_DEVELOPER, UPDATE_DEVELOPER_INFO } from './action-types'

export function hireDeveloper (developerInfo) {
  return createAction(HIRE_DEVELOPER, developerInfo)
}

export function updateDeveloperInfo (developerInfo) {
  return createAction(UPDATE_DEVELOPER_INFO, developerInfo)
}

export function fireDeveloper (developerId) {
  return createAction(FIRE_DEVELOPER, developerId)
}
