import type { Skill, I18nField } from '@/db/dbTypes'
import { SkillTypes } from '@/db/dbTypes'
import { usageInWords } from '@/utils/dateUtils'
import type { Filterable } from '@/types'

export default class SkillDecorator implements Filterable {
  id: number

  staticId: string

  titleI18n: I18nField

  isTop: boolean

  type: SkillTypes

  useInMonths: number | undefined

  isVisible: boolean

  constructor(skill: Skill, useInMonths: number | undefined = undefined) {
    this.id = skill.id
    this.staticId = skill.staticId
    this.titleI18n = skill.titleI18n
    this.isTop = skill.isTop
    this.type = skill.type
    this.useInMonths = useInMonths
    this.isVisible = true
  }

  static color(type: SkillTypes): string {
    switch (type) {
      case SkillTypes.keyword:
        return 'royalBlue'
      case SkillTypes.technology:
        return 'outrageousOrange'
      case SkillTypes.software:
        return 'mountainMeadow'
      case SkillTypes.soft:
        return 'purple'

      default:
        throw new Error(`${type} is not a valid SkillTypes`)
    }
  }

  usageInWords(): string {
    return usageInWords(this.useInMonths)
  }

  color(): string {
    return SkillDecorator.color(this.type)
  }

  hide(): void {
    this.isVisible = false
  }

  show(): void {
    this.isVisible = true
  }
}
