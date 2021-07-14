import { computed } from 'vue';
import { schema } from 'normalizr';
import useState from '@/composables/useState';
import useSkill from '@/composables/useSkill';

const { allResources, findResource } = useState();
const { skillSchema, findSkills } = useSkill();

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
  const findStageSkill = (id: number|string|undefined) => findResource(resourceName, id);

  const findStageSkills = (ids: Array<number|string|undefined>) => ids
    .map((id) => findStageSkill(id));

  const findSkillsThroughStageSkills = (stageSkillIds: Array<number|string|undefined>) => {
    if (!stageSkillIds) { return []; }
    const localStageSkills = findStageSkills(stageSkillIds);
    const skillIds = Object.values(localStageSkills)
      .map((stageSkill: any) => stageSkill.skill);
    return findSkills(skillIds);
  };

  return {
    stageSkills,
    findStageSkill,
    stageSkillSchema,
    findStageSkills,
    findSkillsThroughStageSkills,
  };
}
