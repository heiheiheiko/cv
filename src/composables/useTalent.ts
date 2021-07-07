import { computed } from 'vue';
import { schema } from 'normalizr';
import useState from '@/composables/useState';
import talentsJson from '@/db/talents';
import useAddressable from '@/composables/useAddressable';
import useTrait from '@/composables/useTrait';
import useStatement from '@/composables/useStatement';
import useLinkable from '@/composables/useLinkable';
import useStage from '@/composables/useStage';

const {
  normalizeAndAssignData, allResources, findResource,
} = useState();
const { addressableSchema } = useAddressable();
const { traitSchema } = useTrait();
const { statementSchema } = useStatement();
const { linkableSchema } = useLinkable();
const { stageSchema } = useStage();

// constants
const resourceName = 'talents';

// schema
const talentSchema = new schema.Entity(resourceName, {
  addressable: addressableSchema,
  traits: [traitSchema],
  statements: [statementSchema],
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
