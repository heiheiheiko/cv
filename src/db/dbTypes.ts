interface I18nField {
  de: string,
  en: string
}

interface Addressable{
  id: number,
  person: string,
  street: string,
  zip: string,
  city: string,
  parentId: number,
  parentType: string,
}

interface Trait{
  id: number,
  titleI18n: I18nField,
  quoteI18n: I18nField,
  url: string,
}

interface Applicant {
  id: number,
  birthday: Date,
  email: string,
  mobilePhone: string,
  familyStatusI18n: I18nField,
  sloganI18n: I18nField,
  addressable?: Addressable
  traits?: Array<Trait>,
}

export {
  I18nField, Applicant, Addressable, Trait,
};
