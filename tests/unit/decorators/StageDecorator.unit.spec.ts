import { ReferenceTypes } from '@/db/dbTypes';
import StageDecorator from '@/decorators/StageDecorator';
import { Colorable, Filterable } from '@/types';
import padawanTrainingStageFixture from '../fixtures/stages/101.padawan-training';
import constructedLightsaberStageFixture from '../fixtures/stages/201.constructed-lightsaber';
import stormtrooperCorpsStageFixture from '../fixtures/stages/301.stormtrooper-corps';
import { sharedColorableSpecsByReferenceType } from './sharedColorableSpecs';
import { sharedFilterableSpecs } from './sharedFilterableSpecs';

describe('StageDecorator', () => {
  describe('instantiate with a valid educational stage', () => {
    const subject:Record<string, any> = new StageDecorator(padawanTrainingStageFixture);
    subject.organization = 1;
    subject.stageSkills = [1, 2];

    describe('Should provide Stage attribute', () => {
      test.each([
        ['id', 101],
        ['type', ReferenceTypes.educational],
        ['isTop', true],
        ['isVisible', true],
        ['isEvent', false],
        ['startedAt', new Date('1978-02-09')],
        ['endedAt', new Date('1983-05-25')],
        ['icon', 'book'],
        ['descriptionI18n', {
          de: 'Jedi-Akademien wurden gegründet, um machtsensitive Wesen auszubilden.',
          en: 'Jedi academies were established to train Force-sensitive beings.',
        }],
        ['noteI18n', {
          de: 'Abgeschlossen als Stufenbester',
          en: 'Completed as the best in class',
        }],

        ['stageSkills', [1, 2]],
        ['organization', 1],
        ['position', undefined],
        ['employment', undefined],
        ['graduationI18n', {
          de: 'Padawan',
          en: 'Padawan',
        }],
        ['courseI18n', {
          de: 'Ausbildung zum Padawan',
          en: 'Training to become a Padwan',
        }],
        ['titleI18n', undefined],

      ])('"%s"', (attribute, value) => {
        const { ...object } = subject;
        expect(object[attribute]).toStrictEqual(value);
      });
    });

    describe('Should provide decorator method', () => {
      describe('title()', () => {
        it('And should return a correct string', () => {
          expect(subject.title()).toBe('Ausbildung zum Padawan – Padawan');
        });
      });

      describe('subtitle()', () => {
        it('And should return a correct string', () => {
          expect(subject.subtitle()).toBe('Feb. 1978 - Mai 1983');
        });
      });
    });

    sharedFilterableSpecs(subject as Filterable);
    sharedColorableSpecsByReferenceType(subject as Colorable, ReferenceTypes.educational);
  });

  describe('instantiate with a valid personal stage', () => {
    const subject:Record<string, any> = new StageDecorator(constructedLightsaberStageFixture);

    describe('Should provide stage attribute', () => {
      test.each([
        ['id', 201],
        ['type', ReferenceTypes.personal],
        ['isTop', true],
        ['isVisible', true],
        ['isEvent', true],
        ['startedAt', new Date('1999-08-19')],
        ['endedAt', null],
        ['icon', 'lightsaber'],
        ['descriptionI18n', {
          de: 'Grünes Lichtschwert mit metallischem Griff',
          en: 'Green lightsaber with a metallic handle',
        }],
        ['noteI18n', {
          de: 'Unter Aufsicht von Meister Yoda',
          en: 'Under the supervision of Master Yoda',
        }],

        ['stageSkills', []],
        ['organization', undefined],
        ['position', undefined],
        ['employment', undefined],
        ['graduationI18n', undefined],
        ['courseI18n', undefined],
        ['titleI18n', {
          de: 'Lichtschwert konstruiert',
          en: 'Constructed lightsaber',
        }],
      ])('"%s"', (attribute, value) => {
        const { ...object } = subject;
        expect(object[attribute]).toStrictEqual(value);
      });
    });

    describe('Should provide decorator method', () => {
      describe('title()', () => {
        it('And should return a correct string', () => {
          expect(subject.title()).toBe('Lichtschwert konstruiert');
        });
      });

      describe('subtitle()', () => {
        it('And should return a correct string', () => {
          expect(subject.subtitle()).toBe('Aug. 1999');
        });
      });
    });

    sharedColorableSpecsByReferenceType(subject as Colorable, ReferenceTypes.personal);
  });

  describe('instantiate with a valid professional stage', () => {
    const subject:Record<string, any> = new StageDecorator(stormtrooperCorpsStageFixture);
    subject.organization = 1;
    subject.stageSkills = [1, 2];

    describe('Should provide stage attribute', () => {
      test.each([
        ['id', 301],
        ['type', ReferenceTypes.professional],
        ['isTop', true],
        ['isVisible', true],
        ['isEvent', false],
        ['startedAt', new Date('2010-12-01')],
        ['endedAt', null],
        ['icon', 'empire'],
        ['descriptionI18n', {
          de: 'Verteidigung des Galaktischen Imperiums',
          en: 'Defending the Galactic Empire',
        }],
        ['noteI18n', {
          de: 'Zum besten Schützen ausgezeichnet',
          en: 'Awarded the best marksman award',
        }],

        ['stageSkills', [1, 2]],
        ['organization', 1],
        ['position', 'WEB_DEVELOPER'],
        ['employment', 'EMPLOYEE'],
        ['graduationI18n', undefined],
        ['courseI18n', undefined],
        ['titleI18n', undefined],
      ])('"%s"', (attribute, value) => {
        const { ...object } = subject;
        expect(object[attribute]).toStrictEqual(value);
      });
    });

    describe('Should provide decorator method', () => {
      describe('title()', () => {
        it('And should return a correct string', () => {
          expect(subject.title()).toBe('Web Developer – Angestellter');
        });
      });

      describe('subtitle()', () => {
        it('And should return a correct string', () => {
          expect(subject.subtitle()).toBe('Dez. 2010 - Heute');
        });
      });
    });

    sharedColorableSpecsByReferenceType(subject as Colorable, ReferenceTypes.professional);
  });
});
