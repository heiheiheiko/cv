/* eslint-disable import/prefer-default-export */

import { I18nField } from '@/db/dbTypes';
import { useI18n } from 'vue-i18n';

function translateI18nField(i18nField: I18nField): string {
  const { locale } = useI18n();
  return i18nField[locale.value];
}

export {
  translateI18nField,
};
