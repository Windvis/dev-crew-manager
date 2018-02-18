import { connectRoutes } from 'redux-first-router'
import createHistory from 'history/createBrowserHistory'
import { ROUTES } from '../config/routing/routes'

const history = createHistory()

const routesMap = convertToReduxFirstRouterRoutesMap(ROUTES)

export const {
  reducer,
  enhancer,
  middleware
} = connectRoutes(history, routesMap)

// The ROUTES object also contains data that should not be in the redux store, so we just exctract the needed data
function convertToReduxFirstRouterRoutesMap (routes) {
  return Object.keys(routes).reduce((routesMap, routeType) => {
    const {path, thunk} = routes[routeType]

    routesMap[routeType] = {path, thunk}

    return routesMap
  }, {})
}
