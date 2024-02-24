import _ from 'lodash'
import type { Filterable, Filter, FilterSwitch } from '@/types'

export default function useFilterable() {
  const buildFilters = (filterSwitches: Array<FilterSwitch>) => {
    const activeFilterSwitches = filterSwitches.filter((filterSwitch) => filterSwitch.isActive)
    const groupedFilterSwitches = _(activeFilterSwitches).groupBy('attribute')
    return groupedFilterSwitches.map(
      (_filterSwitches, attribute) =>
        ({
          attribute,
          values: _filterSwitches.map((filterSwitch) => filterSwitch.value)
        }) as Filter
    )
  }

  const filterFilterables = (
    filterables: Array<Filterable>,
    filters: Array<Filter>,
    orderOptions = ['id']
  ) => {
    filterables.forEach((filterable: Record<string, any>) => {
      const filterChecks = filters.map((filter: Filter) => {
        const { ...object } = filterable
        return filter.values.includes(object[filter.attribute])
      })

      if (filterChecks.every((filterCheck) => filterCheck)) {
        filterable.show()
      } else {
        filterable.hide()
      }
    })

    return _.orderBy(filterables, ...orderOptions)
  }

  return {
    filterFilterables,
    buildFilters
  }
}
