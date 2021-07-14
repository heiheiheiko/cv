import { computed } from 'vue';
import { schema } from 'normalizr';
import { Organization } from '@/db/dbTypes';
import useState from '@/composables/useState';
import OrganizationDecorator from '@/decorators/OrganizationDecorator';

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
  // eslint-disable-next-line max-len
  const findOrganization = (id: number) => new OrganizationDecorator(findResource(resourceName, id));

  // decorators
  const locationDeco = (organization: Organization) => `${organization.street}, 
    ${organization.zip}, ${organization.city}`;

  return {
    organizations, findOrganization, organizationSchema, locationDeco,
  };
}
