import { HIRE_DEVELOPER } from './action-types'
import { createReducer } from '../../utils/redux/createReducer'
import initialState from '../../data/developers.json'

export const REDUCER_KEY = 'developers'

const actionHandlers = {
  [HIRE_DEVELOPER]: (state, {payload: developerInfo}) => {
    return [
      ...state,
      developerInfo
    ]
  }
}

export default createReducer(initialState, actionHandlers)
