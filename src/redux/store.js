import { createStore } from 'redux'
import rootReducer from './rootReducer'
import { isDevelopmentEnvironment } from '../utils/environment/environment'
import is from '../utils/general/is'

export const store = createStore(
  rootReducer,
  addReduxDevtoolsIfPossible()
)

function addReduxDevtoolsIfPossible () {
  if (isDevelopmentEnvironment() && !is.undefined(window.__REDUX_DEVTOOLS_EXTENSION__)) {
    return window.__REDUX_DEVTOOLS_EXTENSION__()
  }
}
