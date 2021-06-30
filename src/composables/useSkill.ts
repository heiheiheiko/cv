import { computed } from 'vue';
import { schema } from 'normalizr';
import useState from '@/composables/useState';
import useAddressable from '@/composables/useAddressable';

const {
  allResources, findResource,
} = useState();
const { addressableSchema } = useAddressable();

// constants
const resourceName = 'skills';

// schema
const skillSchema = new schema.Entity(resourceName, {
  addressable: addressableSchema,
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
