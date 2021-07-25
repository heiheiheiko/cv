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
  color: string
}

interface Dimension {
  tiny: string,
  small: string,
  normal: string,
  large: string,
  huge: string,
}

export { Filter, FilterSwitch, Dimension };
