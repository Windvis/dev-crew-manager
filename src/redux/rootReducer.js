import { combineReducers } from 'redux'
import developersReducer, { REDUCER_KEY } from './developers/reducer'

export default combineReducers({
  [REDUCER_KEY]: developersReducer
})
