import { computed } from 'vue';
import { schema } from 'normalizr';
import useState from '@/composables/useState';

const {
  allResources, findResource,
} = useState();

// constants
const resourceName = 'links';

// schema
const linkSchema = new schema.Entity(resourceName);

// computed
const links = computed(() => allResources(resourceName));

export default function useLink() {
  // methods
  const findLink = (id: number) => findResource(resourceName, id);

  return {
    links, findLink, linkSchema,
  };
}
