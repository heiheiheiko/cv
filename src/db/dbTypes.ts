/* eslint-disable no-shadow */
interface I18nField {
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

enum StageSkillTypes {
  frequent = 'frequent',
  regular = 'regular',
  rare = 'rare',
}
interface StageSkill {
  id: number,
  stageId: number,
  skill: Skill,
  type: StageSkillTypes
}

enum StageTypes {
  education = 'education',
  highlight = 'highlight',
  job = 'job',
}

enum Employments {
  employee = 'employee',
  studentAssistant = 'studentAssistant',
  intern = 'intern',
  bachelor = 'bachelor'
}

enum Positions {
  webDeveloper = 'webDeveloper',
  softwareDeveloper = 'softwareDeveloper',
  juniorSoftwareDeveloper = 'juniorSoftwareDeveloper',
}

interface Stage{
  id: number,
  titleI18n: I18nField,
  descriptionI18n?: I18nField,
  type: StageTypes,
  position?: Positions,
  employment?: Employments,
  startedAt: Date,
  endedAt: Date | null,
  badge: string
  graduationI18n?: I18nField
  addressable?: Addressable,
  linkable?: Linkable,
  stageSkills?: Array<StageSkill>
}

interface Applicant {
  id: number,
  name: string,
  birthday: Date,
  email: string,
  mobilePhone: string,
  familyStatusI18n: I18nField,
  sloganI18n: I18nField,
  addressable?: Addressable
  traits?: Array<Trait>,
  linkables?: Array<Linkable>
  stages?: Array<Stage>
}

export {
  I18nField, Applicant, Addressable, Trait, Linkable, Skill, SkillTypes, Stage,
  StageTypes, StageSkillTypes, StageSkill, Positions, Employments,
};
