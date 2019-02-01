import { UPDATE_OVERVIEW_FILTER } from './action-types'
import { createAction } from '../../utils/redux/createAction'

export function updateOverviewFilter ({ filterName, filterValue }) {
  return createAction(UPDATE_OVERVIEW_FILTER, { filterName, filterValue })
}
