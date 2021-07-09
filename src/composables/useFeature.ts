import { computed } from 'vue';
import { schema } from 'normalizr';
import useState from '@/composables/useState';

const {
  allResources, findResource, findResources,
} = useState();

// constants
const resourceName = 'features';

// schema
const featureSchema = new schema.Entity(resourceName);

// computed
const features = computed(() => allResources(resourceName));

export default function useFeature() {
  // methods
  const findFeature = (id: number) => findResource(resourceName, id);
  const findFeatures = (ids: Array<number|string>) => findResources(resourceName, ids);

  return {
    features, findFeature, findFeatures, featureSchema,
  };
}
