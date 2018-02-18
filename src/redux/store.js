import { createStore, applyMiddleware, compose } from 'redux'
import rootReducer from './rootReducer'
import { isDevelopmentEnvironment } from '../utils/environment/environment'
import is from '../utils/general/is'
import { enhancer as routingEnhancer, middleware as routingMiddleware } from '../routing'

const middlewares = applyMiddleware(routingMiddleware)

const composeEnhancers = getReduxDevtoolsComposeEnhancerWhenDeveloping()

export const store = createStore(
  rootReducer,
  composeEnhancers(routingEnhancer, middlewares)
)

function getReduxDevtoolsComposeEnhancerWhenDeveloping () {
  if (isDevelopmentEnvironment() && !is.undefined(window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__)) {
    return window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
  }

  return compose
}
