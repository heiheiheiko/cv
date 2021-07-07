<template>
  <component :is="icon" />
</template>

<script>
import * as components from '@heroicons/vue/solid';

export default {
  components,
  props: {
    icon: {
      type: String,
      required: true,
    },
  },
};
</script>
