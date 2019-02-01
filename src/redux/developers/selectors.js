import { getReducerState } from '../../utils/redux/getReducerState'
import { REDUCER_KEY } from './reducer'

export function getDevelopers (state) {
  return getReducerState(state, REDUCER_KEY)
}

export function getDeveloperById (state, developerId) {
  return getReducerState(state, REDUCER_KEY).find(
    developer => developer.id === developerId
  )
}
