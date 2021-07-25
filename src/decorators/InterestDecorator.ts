import { Interest, ReferenceTypes, I18nField } from '@/db/dbTypes';
import ReferenceTypeDecorator from './ReferenceTypesDecorator';

export default class InterestDecorator {
  id: number;

  titleI18n: I18nField;

  type: ReferenceTypes;

  icon: string;

  constructor(interest: Interest) {
    this.id = interest.id;
    this.titleI18n = interest.titleI18n;
    this.type = interest.type;
    this.icon = interest.icon;
  }

  color(): string {
    return ReferenceTypeDecorator.color(this.type);
  }
}
