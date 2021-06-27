<template>
  <a
    :href="href"
    :aria-current="isActive ? 'page' : undefined"
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
    isActive: {
      type: Boolean,
      default: false,
    },
  },
});
</script>
