/* eslint-disable no-shadow */

export enum ReferenceTypes {
  educational = 'EDUCATIONAL',
  personal = 'PERSONAL',
  professional = 'PROFESSIONAL'
}

export interface I18nField {
  [unit: string]: string
  de: string
  en: string
}

export interface Testimonial {
  id: number
  staticId: string
  quoteI18n: I18nField
  quotedPerson: string
  url: string
  icon: string
}

export interface Link {
  id: number
  titleI18n: I18nField
  url: string
  icon: string
}

export enum SkillTypes {
  keyword = 'KEYWORD',
  technology = 'TECHNOLOGY',
  software = 'SOFTWARE',
  soft = 'SOFT'
}
export interface Skill {
  id: number
  staticId: string
  titleI18n: I18nField
  isTop: boolean
  type: SkillTypes
}

export interface StageSkill {
  id: number
  stageId: number
  skill: Skill
}

export enum StageTypes {
  education = 'EDUCATION',
  highlight = 'HIGHLIGHT',
  job = 'JOB'
}

export enum EmploymentEnum {
  employee = 'EMPLOYEE',
  studentAssistant = 'STUDENT_ASSISTANT',
  intern = 'INTERN',
  bachelor = 'BACHELOR'
}

export enum PositionEnum {
  webDeveloper = 'WEB_DEVELOPER',
  softwareDeveloper = 'SOFTWARE_DEVELOPER',
  juniorSoftwareDeveloper = 'JUNIOR_SOFTWARE_DEVELOPER'
}

export enum OrganizationSizeEnum {
  between1And10 = 'BETWEEN_1_AND_10',
  between11And50 = 'BETWEEN_11_AND_50',
  between51And200 = 'BETWEEN_51_AND_200',
  between201And500 = 'BETWEEN_201_AND_500',
  between501And1000 = 'BETWEEN_501_AND_1000',
  between1001To5000 = 'BETWEEN_1001_AND_5000'
}

export enum BranchEnum {
  marketing = 'MARKETING',
  food = 'FOOD',
  finance = 'FINANCE',
  agency = 'AGENCY',
  education = 'EDUCATION',
  cloud = 'CLOUD'
}

export interface Organization {
  id: number
  staticId: string
  name: string
  street?: string
  zip?: string
  city?: string
  website?: string
  organizationSize?: OrganizationSizeEnum
  branch?: BranchEnum
}

export interface Stage {
  id: number
  type: ReferenceTypes
  isTop: boolean
  isVisible: boolean
  isEvent: boolean
  startedAt: Date
  endedAt: Date | null
  icon: string
  descriptionI18n?: I18nField
  noteI18n?: I18nField
  imageName?: string

  stageSkills?: Array<StageSkill> // professional, educational
  organization?: Organization // professional, educational
  position?: PositionEnum // professional
  employment?: EmploymentEnum // professional
  jobDescriptionI18n?: I18nField // professional
  graduationI18n?: I18nField // educational
  courseI18n?: I18nField // educational
  titleI18n?: I18nField // personal
}

export interface Feature {
  id: number
  titleI18n: I18nField
  descriptionI18n?: I18nField
  icon: string
}

export interface Interest {
  id: number
  titleI18n: I18nField
  type: ReferenceTypes
  icon: string
}

export interface Talent {
  id: number
  slug: string
  name: string
  icon: string
  positionI18n: I18nField
  birthday: Date
  email: string
  familyStatusI18n: I18nField
  sloganI18n: I18nField
  testimonials?: Array<Testimonial>
  links?: Array<Link>
  stages?: Array<Stage>
  features?: Array<Feature>
  interests?: Array<Interest>
}
