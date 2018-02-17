import { getReducerState } from '../../utils/redux/getReducerState'
import { REDUCER_KEY } from './reducer'

export function getDevelopers (state) {
  return getReducerState(state, REDUCER_KEY)
}
