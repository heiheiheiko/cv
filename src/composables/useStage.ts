import { computed } from 'vue';
import { schema } from 'normalizr';
import useState from '@/composables/useState';
import useOrganization from '@/composables/useOrganization';
import useStageSkill from '@/composables/useStageSkill';

const {
  allResources, findResource, findResources,
} = useState();
const { organizationSchema } = useOrganization();
const { stageSkillSchema } = useStageSkill();

// constants
const resourceName = 'stages';

// schema
const stageSchema = new schema.Entity(resourceName, {
  organization: organizationSchema,
  stageSkills: [stageSkillSchema],
});

// computed
const stages = computed(() => allResources(resourceName));

export default function useStage() {
  // methods
  const findStage = (id: number) => findResource(resourceName, id);
  const findStages = (ids: Array<number|string>) => findResources(resourceName, ids);

  return {
    stages, findStage, stageSchema, findStages,
  };
}
