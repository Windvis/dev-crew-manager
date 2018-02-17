const ENVIRONMENT = {
  DEVELOPMENT: 'development',
  PRODUCTION: 'production'
}

export function getEnvironment () {
  return process.env.NODE_ENV
}

export function isDevelopmentEnvironment () {
  return getEnvironment() === ENVIRONMENT.DEVELOPMENT
}

export function isProductionEnvironment () {
  return getEnvironment() === ENVIRONMENT.DEVELOPMENT
}
