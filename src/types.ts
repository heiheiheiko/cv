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

interface Filterable {
  isVisible: boolean;
  show(): void;
  hide(): void;
}

export {
  Filter, FilterSwitch, Dimension, Filterable,
};
