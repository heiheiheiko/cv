import { computed } from 'vue';
import { schema } from 'normalizr';
import useState from '@/composables/useState';
import useOrganization from '@/composables/useOrganization';
import useStageSkill from '@/composables/useStageSkill';
import StageDecorator from '@/decorators/StageDecorator';
import { orderBy } from 'lodash';

const { allResources, findResource } = useState();
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
  const findStage = (id: number|string) => new StageDecorator(findResource(resourceName, id));
  const findStages = (ids: Array<number|string>) => {
    const localStages = ids.map((id) => findStage(id));
    return orderBy(localStages, 'startedAt', 'desc');
  };

  return {
    stages, findStage, stageSchema, findStages,
  };
}
