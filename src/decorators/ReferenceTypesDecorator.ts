import { ReferenceTypes } from '@/db/dbTypes';

export default class ReferenceTypeDecorator {
  static color(type: ReferenceTypes): string {
    switch (type) {
      case ReferenceTypes.personal:
        return 'robinsEggBlue';
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
        return 'pelorous';
      case ReferenceTypes.professional:
        return 'ceriseRed';
      case ReferenceTypes.educational:
        return 'wisteria';

      default:
        throw new Error(`${type} is not a valid ReferenceType`);
    }
  }
}
