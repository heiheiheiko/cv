import { computed } from 'vue';
import { schema } from 'normalizr';
import useState from '@/composables/useState';

const {
  allResources, findResource,
} = useState();

// constants
const resourceName = 'addressables';

// schema
const addressableSchema = new schema.Entity(resourceName);

// computed
const addressables = computed(() => allResources(resourceName));

export default function useAddressable() {
  // methods
  const findAddressable = (id: number) => findResource(resourceName, id);

  return {
    addressables, findAddressable, addressableSchema,
  };
}
