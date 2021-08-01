/* eslint-disable import/prefer-default-export */

import { I18nField } from '@/db/dbTypes';
import i18n from '@/i18n';

function translateI18nField(i18nField: I18nField|undefined): string {
  if (!i18nField) { return ''; }
  return i18nField[i18n.global.locale.value];
}

export {
  translateI18nField,
};
