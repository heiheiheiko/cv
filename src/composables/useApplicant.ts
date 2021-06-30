import { computed } from 'vue';
import { schema } from 'normalizr';
import useState from '@/composables/useState';
import applicantsJson from '@/db/applicants';

const {
  normalizeAndAssignData, allResources, findResource,
} = useState();

// constants
const resourceName = 'applicants';

// schema
const applicantSchema = new schema.Entity(resourceName);

// computed
const applicants = computed(() => allResources(resourceName));

export default function useApplicant() {
  // methods
  const fetchApplicants = () => normalizeAndAssignData(applicantsJson, [applicantSchema]);

  const findApplicant = (id: number) => findResource(resourceName, id);

  return {
    applicants, fetchApplicants, findApplicant,
  };
}
