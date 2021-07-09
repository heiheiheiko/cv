import { computed } from 'vue';
import { schema } from 'normalizr';
import useState from '@/composables/useState';

const {
  allResources, findResource, findResources, findResourceByAttribute,
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
  const findTestimonials = (ids: Array<number|string>) => findResources(resourceName, ids);
  const findTestimonialByStaticId = (staticId: string) => findResourceByAttribute(resourceName, 'staticId', staticId);

  return {
    testimonials, findTestimonial, findTestimonials, testimonialSchema, findTestimonialByStaticId,
  };
}
