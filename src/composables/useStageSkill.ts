import { computed } from 'vue';
import { schema } from 'normalizr';
import useState from '@/composables/useState';
import useSkill from '@/composables/useSkill';

const {
  allResources, findResource,
} = useState();
const { skillSchema } = useSkill();

// constants
const resourceName = 'stageSkills';

// schema
const stageSkillSchema = new schema.Entity(resourceName, {
  skill: skillSchema,
});

// computed
const stageSkills = computed(() => allResources(resourceName));

export default function useStageSkill() {
  // methods
  const findStageSkill = (id: number) => findResource(resourceName, id);

  return {
    stageSkills, findStageSkill, stageSkillSchema,
  };
}
