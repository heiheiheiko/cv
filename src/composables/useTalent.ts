import { computed } from 'vue';
import { schema } from 'normalizr';
import useState from '@/composables/useState';
import talentsJson from '@/db/talents';
import useTestimonial from '@/composables/useTestimonial';
import useFeature from '@/composables/useFeature';
import useLink from '@/composables/useLink';
import useStage from '@/composables/useStage';
import useInterest from './useInterest';

const {
  normalizeAndAssignData, allResources, findResource,
} = useState();
const { testimonialSchema } = useTestimonial();
const { featureSchema } = useFeature();
const { linkSchema } = useLink();
const { stageSchema } = useStage();
const { InterestSchema } = useInterest();

// constants
const resourceName = 'talents';

// schema
const talentSchema = new schema.Entity(resourceName, {
  testimonials: [testimonialSchema],
  features: [featureSchema],
  links: [linkSchema],
  stages: [stageSchema],
  interests: [InterestSchema]
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
