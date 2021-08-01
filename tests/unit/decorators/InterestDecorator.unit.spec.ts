import { ReferenceTypes } from '@/db/dbTypes';
import InterestDecorator from '@/decorators/InterestDecorator';
import { Colorable } from '@/types';
import jediOrderInterestFixture from '../fixtures/interests/1.jedi-order';
import { sharedColorableSpecsByReferenceType } from './sharedColorableSpecs';

describe('InterestDecorator', () => {
  describe('instantiate with a valid interest', () => {
    const subject:Record<string, any> = new InterestDecorator(jediOrderInterestFixture);

    describe('Should provide Interest attribute', () => {
      test.each([
        ['id', 1],
        ['titleI18n', {
          de: 'Jedi Orden',
          en: 'Jedi Order',
        }],
        ['type', 'PROFESSIONAL'],
        ['icon', 'jedi-order'],
      ])('"%s"', (attribute, value) => {
        const { ...object } = subject;
        expect(object[attribute]).toStrictEqual(value);
      });
    });

    sharedColorableSpecsByReferenceType(subject as Colorable, ReferenceTypes.professional);
  });
});
