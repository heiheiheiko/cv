interface I18nField {
  de: string,
  en: string
}

interface Applicant {
  id: number,
  birthday: Date,
  email: string,
  mobilePhone: string,
  familyStatusI18n: I18nField,
  sloganI18n: I18nField,
}

export {
  I18nField, Applicant,
};
