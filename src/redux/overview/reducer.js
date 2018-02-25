import { UPDATE_OVERVIEW_FILTER } from './action-types'
import { createReducer } from '../../utils/redux/createReducer'

export const REDUCER_KEY = 'overview'

const initialState = {
  filters: {
    role: '',
    frameworks: ['React']
  }
}

const actionHandlers = {
  [UPDATE_OVERVIEW_FILTER]: (state, {filterName, filterValue}) => {
    return {
      ...state,
      filters: {
        ...state.filters,
        [filterName]: filterValue
      }
    }
  }
}

export default createReducer(initialState, actionHandlers)
