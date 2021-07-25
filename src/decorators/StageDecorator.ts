/* eslint-disable no-case-declarations */
import i18n from '@/i18n';

import {
  Stage, I18nField, ReferenceTypes, PositionEnum, EmploymentEnum,
  Organization, StageSkill,
} from '@/db/dbTypes';
import { translateI18nField } from '@/utils/i18nUtils';
import ReferenceTypeDecorator from '@/decorators/ReferenceTypesDecorator';

const { t, d } = i18n.global;

export default class stageDecorator {
  id: number;

  titleI18n: I18nField | undefined;

  isTop: boolean;

  type:ReferenceTypes;

  descriptionI18n: I18nField | undefined;

  position: PositionEnum | undefined;

  employment: EmploymentEnum | undefined;

  startedAt: Date;

  endedAt: Date | null;

  icon: string;

  graduationI18n: I18nField | undefined;

  organization: Organization | undefined;

  stageSkills: StageSkill[] | [];

  courseI18n: I18nField | undefined;

  note: string | undefined;

  constructor(stage: Stage) {
    this.id = stage.id;
    this.type = stage.type;
    this.isTop = stage.isTop;
    this.startedAt = stage.startedAt;
    this.endedAt = stage.endedAt;
    this.icon = stage.icon;
    this.descriptionI18n = stage.descriptionI18n;
    this.note = stage.note;

    this.stageSkills = stage.stageSkills || [];
    this.organization = stage.organization;
    this.position = stage.position;
    this.employment = stage.employment;
    this.courseI18n = stage.courseI18n;
    this.graduationI18n = stage.graduationI18n;
    this.titleI18n = stage.titleI18n;
  }

  color(): string {
    return ReferenceTypeDecorator.color(this.type);
  }

  colorGradient(): string {
    return ReferenceTypeDecorator.colorGradient(this.type);
  }

  title(): string {
    switch (this.type) {
      case ReferenceTypes.educational:
        if (this.graduationI18n) {
          return `${translateI18nField(this.courseI18n)} – 
                ${translateI18nField(this.graduationI18n)}`;
        }

        return translateI18nField(this.courseI18n);
      case ReferenceTypes.personal:
        return translateI18nField(this.titleI18n);
      case ReferenceTypes.professional:
        return `${t(`resources.stage.enums.position.${this.position}`)} – 
                ${t(`resources.stage.enums.employment.${this.employment}`)}`;

      default:
        return 'gray';
    }
  }

  subtitle(): string {
    const endedAtOrToday = this.endedAt ? d(this.endedAt, 'short') : t('datetime.today');
    return `${d(this.startedAt, 'short')} - ${endedAtOrToday}`;
  }
}
