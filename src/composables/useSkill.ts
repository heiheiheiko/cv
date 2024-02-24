import { computed } from 'vue'
import { schema } from 'normalizr'
import useState from '@/composables/useState'
import SkillDecorator from '@/decorators/SkillDecorator'
import { orderBy } from 'lodash'

const { allResources, findResource } = useState()

// constants
const resourceName = 'skills'

// schema
const skillSchema = new schema.Entity(resourceName, {})

// computed
const skills = computed(() => allResources(resourceName))

export default function useSkill() {
  // methods
  const findSkill = (id: number) => new SkillDecorator(findResource(resourceName, id))

  const findSkills = (ids: Array<number>) => {
    const localSkills = ids.map((id) => findSkill(id))
    return orderBy(localSkills, ['type', 'id'])
  }

  return {
    skills,
    findSkill,
    findSkills,
    skillSchema
  }
}
