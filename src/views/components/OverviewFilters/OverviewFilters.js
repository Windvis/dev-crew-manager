import React from 'react'
import { connect } from 'react-redux'
import Select from 'react-select'
import { updateOverviewFilter } from '../../../redux/overview/actions'
import convertObjectToSelectOptions from '../../../utils/developers/convertObjectToSelectOptions'
import { getFilterValue as getFilterValueAction } from '../../../redux/overview/selectors'
import { FILTERS } from '../../../config/overview/filters'
import { ROLES } from '../../../config/developers/roles'
import { FRAMEWORKS } from '../../../config/developers/frameworks'
import is from '../../../utils/general/is'

function OverviewFilters ({getFilterValue, updateFilter}) {
  return (
    <div className='overview-filters container'>
      <Select
        className='overview-filters__filter'
        name='role-filter'
        value={getFilterValue(FILTERS.ROLE)}
        placeholder='Filter by role'
        onChange={(data) => {
          updateFilter({
            filterName: FILTERS.ROLE, 
            filterValue: is.set(data) ? data.value : ''
          })
        }}
        options={convertObjectToSelectOptions(ROLES)}
      />

      <Select
        className='overview-filters__filter'
        name='framework-filter'
        value={getFilterValue(FILTERS.FRAMEWORKS)}
        multi
        placeholder='Filter by frameworks'        
        onChange={(valueData) => {
          updateFilter({
            filterName: FILTERS.FRAMEWORKS, 
            filterValue: valueData.map((data) => data.value)
          })
        }}
        options={convertObjectToSelectOptions(FRAMEWORKS)}
      />
    </div>
  )
}

function mapStateToProps (state) {
  return {
    getFilterValue: (filterName) => getFilterValueAction(state, {filterName})
  }
}

function mapDispatchToProps (dispatch) {
  return {
    updateFilter: ({filterName, filterValue}) => {
      dispatch(updateOverviewFilter({filterName, filterValue}))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(OverviewFilters)
