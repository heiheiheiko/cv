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
      'inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium': true,
      'border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700': !props.navigationObject.isActive,
      'border-indigo-500 text-gray-900': props.navigationObject.isActive,
    };

    return {
      classObject,
    };
  },
});
</script>
