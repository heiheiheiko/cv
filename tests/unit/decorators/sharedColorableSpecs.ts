import { ReferenceTypes } from '@/db/dbTypes';
import ReferenceTypeDecorator from '@/decorators/ReferenceTypesDecorator';
import { Colorable } from '@/types';

export function sharedColorableSpecs(subject: Colorable, expectedValues: any): void {
  const { expectedColor, expectedColorGradient } = expectedValues;
  return describe('Should provide colorable decorator method', () => {
    it('color()', () => {
      expect(subject.color()).toBe(expectedColor);
    });

    it('colorGradient()', () => {
      expect(subject.colorGradient()).toBe(expectedColorGradient);
    });
  });
}

export function sharedColorableSpecsByReferenceType(
  subject: Colorable,
  referenceType: ReferenceTypes,
): void {
  sharedColorableSpecs(subject, {
    expectedColor: ReferenceTypeDecorator.color(referenceType),
    expectedColorGradient: ReferenceTypeDecorator.colorGradient(referenceType),
  });
}
