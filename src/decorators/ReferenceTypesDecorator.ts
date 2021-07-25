import { ReferenceTypes } from '@/db/dbTypes';

export default class ReferenceTypeDecorator {
  static color(type: ReferenceTypes): string {
    switch (type) {
      case ReferenceTypes.educational:
        return 'green';
      case ReferenceTypes.professional:
        return 'red';
      case ReferenceTypes.personal:
        return 'indigo';

      default:
        throw new Error(`${type} is not a valid ReferenceType`);
    }
  }
}
