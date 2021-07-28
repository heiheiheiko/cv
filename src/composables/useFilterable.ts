import { orderBy } from 'lodash';
import { Filterable, Filter } from '@/types';

export default function useFilterable() {
  const filterFilterables = (filterables: Array<Filterable>, filters: Array<Filter>) => {
    filterables.forEach((filterable: Record<string, any>) => {
      const filterChecks = filters.map((filter: Filter) => {
        const { ...object } = filterable;
        return filter.values.includes(object[filter.attribute]);
      });

      if (filterChecks.every((filterCheck) => filterCheck)) {
        filterable.show();
      } else {
        filterable.hide();
      }
    });

    return orderBy(filterables, ['type', 'id']);
  };

  return {
    filterFilterables,
  };
}
