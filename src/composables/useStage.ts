import { computed } from 'vue';
import { schema } from 'normalizr';
import useState from '@/composables/useState';
import useAddressable from '@/composables/useAddressable';
import useStageSkill from '@/composables/useStageSkill';

const {
  allResources, findResource,
} = useState();
const { addressableSchema } = useAddressable();
const { stageSkillSchema } = useStageSkill();

// constants
const resourceName = 'stages';

// schema
const stageSchema = new schema.Entity(resourceName, {
  addressable: addressableSchema,
  stageSkills: [stageSkillSchema],
});

// computed
const stages = computed(() => allResources(resourceName));

export default function useStage() {
  // methods
  const findStage = (id: number) => findResource(resourceName, id);

  return {
    stages, findStage, stageSchema,
  };
}
