/* eslint-disable no-shadow */

interface I18nField {
  [unit: string] : string,
  de: string,
  en: string
}

interface Addressable{
  id: number,
  addressee?: string,
  street?: string,
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

interface Linkable{
  id: number,
  titleI18n: I18nField,
  url: string,
  parentId: number,
  parentType: string,
}

enum SkillTypes {
  keyword = 'keyword',
  technology = 'technology',
  software = 'software',
  soft = 'soft'
}
interface Skill{
  id: string,
  titleI18n: I18nField,
  isTop: boolean,
  type: SkillTypes,
}

interface StageSkill {
  id: number,
  stageId: number,
  skill: Skill,
}

enum StageTypes {
  education = 'EDUCATION',
  highlight = 'HIGHLIGHT',
  job = 'JOB',
}

enum EmploymentEnum {
  employee = 'EMPLOYEE ',
  studentAssistant = 'STUDENT_ASSISTANT',
  intern = 'INTERN',
  bachelor = 'BACHELOR'
}

enum PositionEnum {
  webDeveloper = 'WEB_DEVELOPER',
  softwareDeveloper = 'SOFTWARE_DEVELOPER',
  juniorSoftwareDeveloper = 'JUNIOR_SOFTWARE_DEVELOPER',
}

interface Stage{
  id: number,
  titleI18n: I18nField,
  descriptionI18n?: I18nField,
  type: StageTypes,
  position?: PositionEnum,
  employment?: EmploymentEnum,
  startedAt: Date,
  endedAt: Date | null,
  badge: string
  graduationI18n?: I18nField
  addressable?: Addressable,
  linkable?: Linkable,
  stageSkills?: Array<StageSkill>
}

interface Feature{
  id: number,
  titleI18n: I18nField,
  descriptionI18n?: I18nField,
  icon: string
}

interface Talent {
  id: number,
  name: string,
  positionI18n: I18nField,
  birthday: Date,
  email: string,
  mobilePhone: string,
  familyStatusI18n: I18nField,
  sloganI18n: I18nField,
  sloganLongI18n: I18nField,
  addressable?: Addressable
  traits?: Array<Trait>,
  linkables?: Array<Linkable>
  stages?: Array<Stage>
  features?: Array<Feature>
}

export {
  I18nField, Talent, Addressable, Trait, Linkable, Skill, SkillTypes, Stage,
  StageTypes, StageSkill, PositionEnum, EmploymentEnum, Feature,
};
