import { computed } from 'vue';
import { schema } from 'normalizr';
import useState from '@/composables/useState';

const {
  allResources, findResource, findResources,
} = useState();

// constants
const resourceName = 'traits';

// schema
const traitSchema = new schema.Entity(resourceName);

// computed
const traits = computed(() => allResources(resourceName));

export default function useTrait() {
  // methods
  const findTrait = (id: number) => findResource(resourceName, id);
  const findTraits = (ids: Array<number|string>) => findResources(resourceName, ids);

  return {
    traits, findTrait, findTraits, traitSchema,
  };
}
