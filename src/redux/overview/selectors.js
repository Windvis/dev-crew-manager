import { getReducerState } from '../../utils/redux/getReducerState'
import { REDUCER_KEY } from './reducer'
import { FILTERS } from '../../config/overview/filters'
import { getDevelopers } from '../developers/selectors'
import {arrayContainsValueFromOtherArray} from '../../utils/array/arrayContainsValueFromOtherArray'

export function getFilterValue (state, {filterName}) {
  return getReducerState(state, REDUCER_KEY).filters[filterName]
}

export function getFrameworksFilterValue (state) {
  return getFilterValue(state, {filterName: FILTERS.FRAMEWORKS})
}

export function getRoleFilterValue (state) {
  return getFilterValue(state, {filterName: FILTERS.ROLE})
}

export function getFilteredDevelopers (state) {
  const developers = getDevelopers(state)

  if (!areFiltersSelected(state)) {
    return developers
  }

  return developers
    .filter((developer) => {
      return filterByRoleIfApplied({
        developer,
        state
      })
    })
    .filter((developer) => {
      return filterByFrameworksIfApplied({developer, state})
    })
}

function filterByRoleIfApplied ({developer, state}) {
  const roleFilterValue = getRoleFilterValue(state)
  
  return roleFilterValue === '' || developer.role === roleFilterValue
}

function filterByFrameworksIfApplied ({developer, state}) {
  const frameworksFilterValue = getFrameworksFilterValue(state)
  
  return (
    frameworksFilterValue.length === 0 ||
    arrayContainsValueFromOtherArray(developer.frameworks, frameworksFilterValue)
  )
}

export function areFiltersSelected (state) {
  return getRoleFilterValue(state) !== '' || getFrameworksFilterValue(state).length !== 0
}