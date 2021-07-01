import { computed } from 'vue';
import { schema } from 'normalizr';
import useState from '@/composables/useState';
import useAddressable from '@/composables/useAddressable';
import useStageSkill from '@/composables/useStageSkill';
import useLinkable from '@/composables/useLinkable';

const {
  allResources, findResource,
} = useState();
const { addressableSchema } = useAddressable();
const { stageSkillSchema } = useStageSkill();
const { linkableSchema } = useLinkable();

// constants
const resourceName = 'stages';

// schema
const stageSchema = new schema.Entity(resourceName, {
  linkable: linkableSchema,
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
