import { Skill, SkillTypes } from '@/db/dbTypes';

export default {
  id: 1,
  staticId: 'lightsaber-fight',
  type: SkillTypes.technology,
  isTop: true,
  titleI18n: {
    de: 'Lichtschwertkampf',
    en: 'Lightsaber fight',
  },
} as Skill;
