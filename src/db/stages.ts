/* eslint-disable no-plusplus */
import {
  Addressable,
  Stage, StageTypes, StageSkill, StageSkillTypes,
} from '@/db/dbTypes';
import skills from '@/db/skills';

const parentType = 'Stage';
let stageId = 1;
let addressableId = 2;
let stageSkillId = 1;
export default [
  // Geburtstag
  {
    id: stageId++,
    titleI18n: {
      de: 'Geburtstag',
      en: 'Birthday',
    },
    type: StageTypes.highlight,
    startedAt: new Date('1986-07-18'),
    endedAt: null,
    badge: 'birthday-cake',
    addressable: {
      id: addressableId++,
      zip: '48653',
      city: 'Coesfeld',
      parentId: stageId - 1,
      parentType,
    } as Addressable,
  },

  // KVG Gesamtschule Nordwalde
  {
    id: stageId++,
    titleI18n: {
      de: 'Realschule',
      en: 'Secondary school',
    },
    type: StageTypes.education,
    graduationI18n: {
      de: 'Fachoberschulreife',
      en: 'Vocational extension certificate',
    },
    started_at: new Date('1997-08-01'),
    ended_at: new Date('2003-07-01'),
    badge: 'book',
    addressable: {
      id: addressableId++,
      addressee: 'KVG Gesamtschule Nordwalde',
      street: 'Amtmann-Daniel-Straße 30',
      zip: '48356',
      city: 'Nordwalde',
      parentId: stageId - 1,
      parentType,
    } as Addressable,
    stageSkills: [
      {
        id: stageSkillId++,
        stageId: stageId - 1,
        skill: skills.find((s) => s.id === 'windows'),
        type: StageSkillTypes.regular,
      } as StageSkill,
      {
        id: stageSkillId++,
        stageId: stageId - 1,
        skill: skills.find((s) => s.id === 'office'),
        type: StageSkillTypes.regular,
      } as StageSkill,
    ],
  },
] as Array<Stage>;
