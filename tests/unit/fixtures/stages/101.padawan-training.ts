import {
  Organization, ReferenceTypes, Stage, StageSkill,
} from '@/db/dbTypes';
import JediAcademyOrganization from '../organizations/2.jedi-academy';
import LightsaberFightSkill from '../skills/1.lightsaber-fight';

export default {
  id: 101,
  type: ReferenceTypes.educational,
  isTop: true,
  isVisible: true,
  startedAt: new Date('1978-02-09'),
  endedAt: new Date('1983-05-25'),
  icon: 'book',
  descriptionI18n: {
    de: 'Jedi-Akademien wurden gegründet, um machtsensitive Wesen auszubilden.',
    en: 'Jedi academies were established to train Force-sensitive beings.',
  },
  noteI18n: {
    de: 'Abgeschlossen als Stufenbester',
    en: 'Completed as the best in class',
  },

  stageSkills: [
    {
      id: 1011,
      stageId: 101,
      skill: LightsaberFightSkill,
    },
  ] as Array<StageSkill>,
  organization: JediAcademyOrganization as Organization,
  position: undefined,
  employment: undefined,
  graduationI18n: {
    de: 'Padawan',
    en: 'Padawan',
  },
  courseI18n: {
    de: 'Ausbildung zum Padawan',
    en: 'Training to become a Padwan',
  },
  titleI18n: undefined,
} as Stage;
