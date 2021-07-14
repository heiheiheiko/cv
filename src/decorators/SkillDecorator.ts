import { Skill, I18nField, SkillTypes } from '@/db/dbTypes';

export default class SkillDecorator {
  id: string;

  titleI18n: I18nField;

  isTop: boolean;

  type:SkillTypes;

  constructor(skill: Skill) {
    this.id = skill.id;
    this.titleI18n = skill.titleI18n;
    this.isTop = skill.isTop;
    this.type = skill.type;
  }

  color(): string {
    switch (this.type) {
      case SkillTypes.keyword:
        return 'orange';
      case SkillTypes.technology:
        return 'indigo';
      case SkillTypes.software:
        return 'teal';
      case SkillTypes.soft:
        return 'purple';

      default:
        return 'gray';
    }
  }
}
