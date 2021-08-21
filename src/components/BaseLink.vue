<template>
  <a
    :href="href"
    class="text-base text-cyan-600"
  >
    <slot />
  </a>
</template>

<script>
import { defineComponent } from 'vue';

export default defineComponent({
  props: {
    href: {
      type: String,
      required: true,
    },
  },
});
</script>
