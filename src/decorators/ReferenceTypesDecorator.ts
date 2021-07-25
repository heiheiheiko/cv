import { ReferenceTypes } from '@/db/dbTypes';

export default class ReferenceTypeDecorator {
  static color(type: ReferenceTypes): string {
    switch (type) {
      case ReferenceTypes.educational:
        return 'robinsEggBlue';
      case ReferenceTypes.professional:
        return 'outrageousOrange';
      case ReferenceTypes.personal:
        return 'royalBlue';

      default:
        throw new Error(`${type} is not a valid ReferenceType`);
    }
  }

  static colorGradient(type: ReferenceTypes): string {
    switch (type) {
      case ReferenceTypes.educational:
        return 'pelorous';
      case ReferenceTypes.professional:
        return 'ceriseRed';
      case ReferenceTypes.personal:
        return 'wisteria';

      default:
        throw new Error(`${type} is not a valid ReferenceType`);
    }
  }
}
