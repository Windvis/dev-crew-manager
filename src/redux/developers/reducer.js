import { HIRE_DEVELOPER, FIRE_DEVELOPER, UPDATE_DEVELOPER_INFO } from './action-types'
import { createReducer } from '../../utils/redux/createReducer'
import initialState from '../../data/developers.json'

export const REDUCER_KEY = 'developers'

const actionHandlers = {
  [HIRE_DEVELOPER]: (state, {developerInfo}) => {
    return [
      ...state,
      developerInfo
    ]
  },
  [FIRE_DEVELOPER]: (state, {developerId}) => {
    return state.filter((developer) => developer.id !== developerId)
  },
  [UPDATE_DEVELOPER_INFO]: (state, {developerData}) => {
    return state.map((developer) => {
      if (developer.id === developerData.id) {
        return {
          ...developer,
          ...developerData
        }
      }

      return developer
    })
  }
}

export default createReducer(initialState, actionHandlers)
