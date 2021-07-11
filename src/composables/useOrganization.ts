import { computed } from 'vue';
import { schema } from 'normalizr';
import useState from '@/composables/useState';

const {
  allResources, findResource,
} = useState();

// constants
const resourceName = 'organizations';

// schema
const organizationSchema = new schema.Entity(resourceName);

// computed
const organizations = computed(() => allResources(resourceName));

export default function useOrganization() {
  // methods
  const findOrganization = (id: number) => findResource(resourceName, id);

  return {
    organizations, findOrganization, organizationSchema,
  };
}
