<template>
  <BaseLink
    :href="navigationObject.href"
    :class="classObject"
    :aria-current="navigationObject.isActive ? 'page' : undefined"
  >
    {{ navigationObject.name }}
  </BaseLink>
</template>

<script>
import { defineComponent } from 'vue';
import BaseLink from '@/components/BaseLink.vue';

export default defineComponent({
  components: {
    BaseLink,
  },
  props: {
    navigationObject: {
      type: Object,
      required: true,
    },
  },
  setup(props) {
    const classObject = {
      'block pl-3 pr-4 py-2 border-l-4 text-base font-medium': true,
      'border-transparent text-gray-600 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-800': !props.navigationObject.isActive,
      'bg-indigo-50 border-indigo-500 text-indigo-700': props.navigationObject.isActive,
    };

    return {
      classObject,
    };
  },
});
</script>
