/* eslint-disable no-shadow */

interface Filter {
  attribute: string,
  values: Array<string|number>
}

interface FilterSwitch {
  id: string,
  attribute: string,
  value: string,
  label: string,
  isActive: boolean,
}

export { Filter, FilterSwitch };
