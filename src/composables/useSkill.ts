import { computed } from 'vue';
import { schema } from 'normalizr';
import useState from '@/composables/useState';
import { Skill } from '@/db/dbTypes';
import SkillDecorator from '@/decorators/SkillDecorator';
import { orderBy } from 'lodash';

const { allResources, findResource } = useState();

// constants
const resourceName = 'skills';

// schema
const skillSchema = new schema.Entity(resourceName, {});

// computed
const skills = computed(() => allResources(resourceName));

export default function useSkill() {
  // methods
  const findSkill = (id: number|string) => new SkillDecorator(findResource(resourceName, id));

  const findSkills = (ids: Array<number|string>) => {
    const localSkills = ids.map((id) => findSkill(id));
    const orderedSkills = orderBy(localSkills, ['type', 'id']);
    return orderedSkills.map((skill: Skill) => new SkillDecorator(skill));
  };

  return {
    skills, findSkill, findSkills, skillSchema,
  };
}
