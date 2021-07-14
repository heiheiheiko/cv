/* eslint-disable no-case-declarations */
import i18n from '@/i18n';

import {
  Stage, I18nField, StageTypes, PositionEnum, EmploymentEnum,
  Organization, StageSkill,
} from '@/db/dbTypes';

const { t, d } = i18n.global;

export default class stageDecorator {
  id: number;

  titleI18n: I18nField;

  isTop: boolean;

  type:StageTypes;

  descriptionI18n: I18nField | undefined;

  position: PositionEnum | undefined;

  employment: EmploymentEnum | undefined;

  startedAt: Date;

  endedAt: Date | null;

  icon: string;

  graduationI18n: I18nField | undefined;

  organization: Organization | undefined;

  stageSkills: StageSkill[] | undefined;

  constructor(stage: Stage) {
    this.id = stage.id;
    this.titleI18n = stage.titleI18n;
    this.descriptionI18n = stage.descriptionI18n;
    this.type = stage.type;
    this.isTop = stage.isTop;
    this.position = stage.position;
    this.employment = stage.employment;
    this.startedAt = stage.startedAt;
    this.endedAt = stage.endedAt;
    this.icon = stage.icon;
    this.graduationI18n = stage.graduationI18n;
    this.organization = stage.organization;
    this.stageSkills = stage.stageSkills;
  }

  color(): string {
    switch (this.type) {
      case StageTypes.education:
        return 'green';
      case StageTypes.highlight:
        return 'indigo';
      case StageTypes.job:
        return 'red';

      default:
        return 'gray';
    }
  }

  title(): string {
    switch (this.type) {
      case StageTypes.education:
        return 'green';
      case StageTypes.highlight:
        return 'indigo';
      case StageTypes.job:
        return `${t(`resources.stage.enums.position.${this.position}`)} – 
                ${t(`resources.stage.enums.employment.${this.employment}`)}`;

      default:
        return 'gray';
    }
  }

  subtitle(): string {
    switch (this.type) {
      case StageTypes.education:
        return 'green';
      case StageTypes.highlight:
        return 'indigo';
      case StageTypes.job:
        const endedAtOrToday = this.endedAt ? d(this.endedAt, 'short') : t('datetime.today');
        return `${d(this.startedAt, 'short')} - ${endedAtOrToday}`;

      default:
        return 'gray';
    }
  }
}
