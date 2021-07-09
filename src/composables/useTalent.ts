import { computed } from 'vue';
import { schema } from 'normalizr';
import useState from '@/composables/useState';
import talentsJson from '@/db/talents';
import useAddressable from '@/composables/useAddressable';
import useTestimonial from '@/composables/useTestimonial';
import useFeature from '@/composables/useFeature';
import useLinkable from '@/composables/useLinkable';
import useStage from '@/composables/useStage';

const {
  normalizeAndAssignData, allResources, findResource,
} = useState();
const { addressableSchema } = useAddressable();
const { testimonialSchema } = useTestimonial();
const { featureSchema } = useFeature();
const { linkableSchema } = useLinkable();
const { stageSchema } = useStage();

// constants
const resourceName = 'talents';

// schema
const talentSchema = new schema.Entity(resourceName, {
  addressable: addressableSchema,
  testimonials: [testimonialSchema],
  features: [featureSchema],
  linkables: [linkableSchema],
  stages: [stageSchema],
});

// computed
const talents = computed(() => allResources(resourceName));

export default function useTalent() {
  // methods
  const fetchTalents = () => normalizeAndAssignData(talentsJson, [talentSchema]);
  const findTalent = (id: number) => findResource(resourceName, id);

  return {
    talents, fetchTalents, findTalent,
  };
}
