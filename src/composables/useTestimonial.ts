import { computed } from 'vue';
import { schema } from 'normalizr';
import useState from '@/composables/useState';

const {
  allResources, findResource, findResourceByAttribute,
} = useState();

// constants
const resourceName = 'testimonials';

// schema
const testimonialSchema = new schema.Entity(resourceName);

// computed
const testimonials = computed(() => allResources(resourceName));

export default function useTestimonial() {
  // methods
  const findTestimonial = (id: number) => findResource(resourceName, id);
  const findTestimonialByStaticId = (staticId: string) => findResourceByAttribute(resourceName, 'staticId', staticId);

  return {
    testimonials, findTestimonial, testimonialSchema, findTestimonialByStaticId,
  };
}
