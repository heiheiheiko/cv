/* eslint-disable no-plusplus */

import {
  Interest, ReferenceTypes,
} from '@/db/dbTypes';

let interestId = 1;

export default [
  // personal
  {
    id: interestId++,
    titleI18n: {
      de: 'Brettspiele',
      en: 'Board games',
    },
    type: ReferenceTypes.personal,
    icon: 'chess',
  },
  {
    id: interestId++,
    titleI18n: {
      de: 'Computerspiele',
      en: 'Computer games',
    },
    type: ReferenceTypes.personal,
    icon: 'gamepad',
  },
  {
    id: interestId++,
    titleI18n: {
      de: 'Outdoor Aktivitäten',
      en: 'Outdoor activities',
    },
    type: ReferenceTypes.personal,
    icon: 'hiking',
  },
  {
    id: interestId++,
    titleI18n: {
      de: 'Kung Fu',
      en: 'Kung Fu',
    },
    type: ReferenceTypes.personal,
    icon: 'hand-rock',
  },
  {
    id: interestId++,
    titleI18n: {
      de: 'Naturschutz',
      en: 'Natural conservancy',
    },
    type: ReferenceTypes.personal,
    icon: 'tree',
  },
  {
    id: interestId++,
    titleI18n: {
      de: 'Gleichberechtigung',
      en: 'Equality',
    },
    type: ReferenceTypes.personal,
    icon: 'people-arrows',
  },
  {
    id: interestId++,
    titleI18n: {
      de: 'Programmieren',
      en: 'Programming',
    },
    type: ReferenceTypes.personal,
    icon: 'code',
  },

  // personal
  {
    id: interestId++,
    titleI18n: {
      de: 'Frontend Technologien',
      en: 'Frontend technologies',
    },
    type: ReferenceTypes.professional,
    icon: 'address-card',
  },
  {
    id: interestId++,
    titleI18n: {
      de: 'Usability',
      en: 'Usability',
    },
    type: ReferenceTypes.professional,
    icon: 'map-marked-alt',
  },
  {
    id: interestId++,
    titleI18n: {
      de: 'Gamification',
      en: 'Gamification',
    },
    type: ReferenceTypes.professional,
    icon: 'ghost',
  },
  {
    id: interestId++,
    titleI18n: {
      de: 'Softwarequalität',
      en: 'Software quality',
    },
    type: ReferenceTypes.professional,
    icon: 'gem',
  },
  {
    id: interestId++,
    titleI18n: {
      de: 'Agile Methodology',
      en: 'Agile Methodology',
    },
    type: ReferenceTypes.educational,
    icon: 'project-diagram',
  },
  {
    id: interestId++,
    titleI18n: {
      de: 'Produktentwicklung',
      en: 'Product development',
    },
    type: ReferenceTypes.professional,
    icon: 'space-shuttle',
  },
  {
    id: interestId++,
    titleI18n: {
      de: 'Emotionale Intelligenz',
      en: 'Emotional intelligence',
    },
    type: ReferenceTypes.educational,
    icon: 'user-friends',
  },
] as Array<Interest>;
