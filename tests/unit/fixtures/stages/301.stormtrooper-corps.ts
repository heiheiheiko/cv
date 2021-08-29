import {
  EmploymentEnum, PositionEnum, ReferenceTypes, StageSkill,
} from '@/db/dbTypes';
import empireOrganization from '../organizations/1.empire';
import blasterHandlingSkill from '../skills/2.blaster-handling';

export default {
  id: 301,
  type: ReferenceTypes.professional,
  isTop: true,
  isVisible: true,
  isEvent: false,
  startedAt: new Date('2010-12-01'),
  endedAt: null,
  icon: 'empire',
  descriptionI18n: {
    de: 'Verteidigung des Galaktischen Imperiums',
    en: 'Defending the Galactic Empire',
  },
  noteI18n: {
    de: 'Zum besten Schützen ausgezeichnet',
    en: 'Awarded the best marksman award',
  },

  stageSkills: [
    {
      id: 3011,
      stageId: 301,
      skill: blasterHandlingSkill,
    },
  ] as Array<StageSkill>,
  organization: empireOrganization,
  position: PositionEnum.webDeveloper,
  employment: EmploymentEnum.employee,
  graduationI18n: undefined,
  courseI18n: undefined,
  titleI18n: undefined,
};
