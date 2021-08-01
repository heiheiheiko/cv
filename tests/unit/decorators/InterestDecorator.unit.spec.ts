import { ReferenceTypes } from '@/db/dbTypes';
import InterestDecorator from '@/decorators/InterestDecorator';
import { Colorable } from '@/types';
import jediHistoryInterestFixture from '../fixtures/interests/1.jedi-history';
import { sharedColorableSpecsByReferenceType } from './sharedColorableSpecs';

describe('InterestDecorator', () => {
  describe('instantiate with a valid interest', () => {
    const subject:Record<string, any> = new InterestDecorator(jediHistoryInterestFixture);

    describe('Should provide Interest attribute', () => {
      test.each([
        ['id', 1],
        ['titleI18n', {
          de: 'Geschichte der Jedi',
          en: 'History of the Jedi',
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
