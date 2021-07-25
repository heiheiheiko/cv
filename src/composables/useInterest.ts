import { computed } from 'vue';
import { schema } from 'normalizr';
import useState from '@/composables/useState';
import InterestDecorator from '@/decorators/InterestDecorator';
import { orderBy } from 'lodash';


const { allResources, findResource } = useState();

// constants
const resourceName = 'interests';

// schema
const InterestSchema = new schema.Entity(resourceName, {});

// computed
const interests = computed(() => allResources(resourceName));

export default function useInterest() {
  // methods
  const findInterest = (id: number|string) => new InterestDecorator(findResource(resourceName, id));
  const findInterests = (ids: Array<number|string>) => {
    const _interests = ids.map((id) => findInterest(id));
    return orderBy(_interests, 'id');
  };

  return {
    interests, findInterest, InterestSchema, findInterests,
  };
}
