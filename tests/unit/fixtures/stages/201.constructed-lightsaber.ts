import { ReferenceTypes, Stage } from '@/db/dbTypes';

export default {
  id: 201,
  type: ReferenceTypes.personal,
  isTop: true,
  isVisible: true,
  isEvent: true,
  startedAt: new Date('1999-08-19'),
  endedAt: null,
  icon: 'lightsaber',
  descriptionI18n: {
    de: 'Grünes Lichtschwert mit metallischem Griff',
    en: 'Green lightsaber with a metallic handle',
  },
  noteI18n: {
    de: 'Unter Aufsicht von Meister Yoda',
    en: 'Under the supervision of Master Yoda',
  },

  stageSkills: undefined,
  organization: undefined,
  position: undefined,
  employment: undefined,
  graduationI18n: undefined,
  courseI18n: undefined,
  titleI18n: {
    de: 'Lichtschwert konstruiert',
    en: 'Constructed lightsaber',
  },
} as Stage;
