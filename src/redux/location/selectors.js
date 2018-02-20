import { getReducerState } from '../../utils/redux/getReducerState'
import { REDUCER_KEY } from './reducer'

export function getRouteType (state) {
  return getReducerState(state, REDUCER_KEY).type
}

export function getRouteParams (state) {
  return getReducerState(state, REDUCER_KEY).payload
}
