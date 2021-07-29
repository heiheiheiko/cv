import SkillDecorator from '@/decorators/SkillDecorator';
import { Filterable } from '@/types';
import lightsaberFightSkillFixture from '../fixtures/skills/1-lightsaber-fight';
import { sharedFilterableSpecs } from './sharedFilterableSpecs';

describe('SkillDecorator', () => {
  describe('instantiate with a valid skill and without "useInMonth"', () => {
    const subject:Record<string, any> = new SkillDecorator(lightsaberFightSkillFixture, undefined);

    describe('Should provide skill attribute', () => {
      test.each([
        ['id', 'lightsaber-fight'],
        ['titleI18n', {
          de: 'Lichtschwertkampf',
          en: 'Lightsaber fight',
        }],
        ['type', 'TECHNOLOGY'],
        ['isTop', true],
      ])('"%s"', (attribute, value) => {
        const { ...object } = subject;
        expect(object[attribute]).toStrictEqual(value);
      });
    });

    describe('Should provide decorator method', () => {
      describe('color()', () => {
        it('And should return the correct color', () => {
          expect(subject.color()).toBe('outrageousOrange');
        });

        it('And should throw an error when the given type is not a valid SkillType', () => {
          subject.type = 'NONSENSE';
          expect(() => subject.color()).toThrowError('NONSENSE is not a valid SkillTypes');
        });
      });

      describe('usageInWords()', () => {
        it('And should return an empty string', () => {
          expect(subject.usageInWords()).toBe('');
        });
      });
    });

    sharedFilterableSpecs(subject as Filterable);
  });

  describe('instantiate with a valid skill and "useInMonth"', () => {
    const subject:Record<string, any> = new SkillDecorator(lightsaberFightSkillFixture, 8);

    describe('Should provide decorator method', () => {
      describe('usageInWords()', () => {
        it('And should return the correct string', () => {
          expect(subject.usageInWords()).not.toBe('');
        });
      });
    });
  });
});
