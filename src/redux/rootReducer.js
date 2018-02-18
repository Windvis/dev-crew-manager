import { combineReducers } from 'redux'
import { reducer as locationReducer, REDUCER_KEY as LOCATION_REDUCER_KEY } from './location/reducer'
import developersReducer, { REDUCER_KEY as DEVELOPER_REDUCER_KEY } from './developers/reducer'

export default combineReducers({
  [LOCATION_REDUCER_KEY]: locationReducer,
  [DEVELOPER_REDUCER_KEY]: developersReducer
})
