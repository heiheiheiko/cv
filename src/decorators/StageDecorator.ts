/* eslint-disable no-case-declarations */

import i18n from '@/i18n'

import type { Stage, I18nField, Organization, StageSkill } from '@/db/dbTypes'
import { ReferenceTypes, PositionEnum, EmploymentEnum } from '@/db/dbTypes'
import { translateI18nField } from '@/utils/i18nUtils'
import ReferenceTypeDecorator from '@/decorators/ReferenceTypesDecorator'
import type { Filterable, Colorable } from '@/types'

const { t, d } = i18n.global

export default class StageDecorator implements Filterable, Colorable {
  id: number

  titleI18n: I18nField | undefined

  isTop: boolean

  isVisible: boolean

  isEvent: boolean

  type: ReferenceTypes

  descriptionI18n: I18nField | undefined

  position: PositionEnum | undefined

  employment: EmploymentEnum | undefined

  jobDescriptionI18n: I18nField | undefined

  startedAt: Date

  endedAt: Date | null

  icon: string

  graduationI18n: I18nField | undefined

  organization: Organization | undefined

  stageSkills: StageSkill[] | []

  courseI18n: I18nField | undefined

  noteI18n: I18nField | undefined

  imageName: string | undefined

  constructor(stage: Stage) {
    this.id = stage.id
    this.type = stage.type
    this.isTop = stage.isTop
    this.isVisible = stage.isVisible
    this.isEvent = stage.isEvent
    this.startedAt = stage.startedAt
    this.endedAt = stage.endedAt
    this.icon = stage.icon
    this.descriptionI18n = stage.descriptionI18n
    this.noteI18n = stage.noteI18n
    this.imageName = stage.imageName

    this.stageSkills = stage.stageSkills || []
    this.organization = stage.organization
    this.position = stage.position
    this.employment = stage.employment
    this.jobDescriptionI18n = stage.jobDescriptionI18n
    this.courseI18n = stage.courseI18n
    this.graduationI18n = stage.graduationI18n
    this.titleI18n = stage.titleI18n
  }

  color(): string {
    return ReferenceTypeDecorator.color(this.type)
  }

  colorGradient(): string {
    return ReferenceTypeDecorator.colorGradient(this.type)
  }

  title(): string {
    switch (this.type) {
      case ReferenceTypes.educational:
        if (this.graduationI18n) {
          return `${translateI18nField(this.courseI18n)} – ${translateI18nField(this.graduationI18n)}`
        }

        return translateI18nField(this.courseI18n)
      case ReferenceTypes.personal:
        return translateI18nField(this.titleI18n)
      case ReferenceTypes.professional:
        return `${t(`resources.stage.enums.position.${this.position}`)} – ${t(`resources.stage.enums.employment.${this.employment}`)}`

      default:
        return 'gray'
    }
  }

  subtitle(): string {
    if (this.isEvent) {
      return d(this.startedAt, 'short')
    }

    const endedAtOrToday = this.endedAt ? d(this.endedAt, 'short') : t('datetime.today')
    return `${d(this.startedAt, 'short')} - ${endedAtOrToday}`
  }

  hide(): void {
    this.isVisible = false
  }

  show(): void {
    this.isVisible = true
  }
}
