import { computed } from 'vue';
import { schema } from 'normalizr';
import useState from '@/composables/useState';

const {
  allResources, findResource,
} = useState();

// constants
const resourceName = 'linkables';

// schema
const linkableSchema = new schema.Entity(resourceName);

// computed
const linkables = computed(() => allResources(resourceName));

export default function useLinkable() {
  // methods
  const findLinkable = (id: number) => findResource(resourceName, id);

  return {
    linkables, findLinkable, linkableSchema,
  };
}
