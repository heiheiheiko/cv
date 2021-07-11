import { computed } from 'vue';
import { schema } from 'normalizr';
import useState from '@/composables/useState';

const {
  allResources, findResource,
} = useState();

// constants
const resourceName = 'skills';

// schema
const skillSchema = new schema.Entity(resourceName, {

});

// computed
const skills = computed(() => allResources(resourceName));

export default function useSkill() {
  // methods
  const findSkill = (id: number) => findResource(resourceName, id);

  return {
    skills, findSkill, skillSchema,
  };
}
