import { ReferenceTypes } from '@/db/dbTypes';

export default class ReferenceTypeDecorator {
  static color(type: ReferenceTypes): string {
    switch (type) {
      case ReferenceTypes.personal:
        return 'mountainMeadow';
      case ReferenceTypes.professional:
        return 'outrageousOrange';
      case ReferenceTypes.educational:
        return 'royalBlue';

      default:
        throw new Error(`${type} is not a valid ReferenceType`);
    }
  }

  static colorGradient(type: ReferenceTypes): string {
    switch (type) {
      case ReferenceTypes.personal:
        return 'bondiBlue';
      case ReferenceTypes.professional:
        return 'lipstick';
      case ReferenceTypes.educational:
        return 'affair';

      default:
        throw new Error(`${type} is not a valid ReferenceType`);
    }
  }
}
