import { computed } from 'vue';
import { schema } from 'normalizr';
import useState from '@/composables/useState';

const {
  allResources, findResource,
} = useState();

// constants
const resourceName = 'features';

// schema
const featureSchema = new schema.Entity(resourceName);

// computed
const features = computed(() => allResources(resourceName));

export default function useFeature() {
  // methods
  const findFeature = (id: number|string) => findResource(resourceName, id);
  const findFeatures = (ids: Array<number|string>) => ids.map((id) => findFeature(id));

  return {
    features, findFeature, findFeatures, featureSchema,
  };
}
