import { computed } from 'vue';
import { schema } from 'normalizr';
import useState from '@/composables/useState';

const {
  allResources, findResource, findResources,
} = useState();

// constants
const resourceName = 'statements';

// schema
const statementSchema = new schema.Entity(resourceName);

// computed
const statements = computed(() => allResources(resourceName));

export default function useStatement() {
  // methods
  const findStatement = (id: number) => findResource(resourceName, id);
  const findStatements = (ids: Array<number|string>) => findResources(resourceName, ids);

  return {
    statements, findStatement, findStatements, statementSchema,
  };
}
