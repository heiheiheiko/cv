<template>
  <span
    class="relative inline-flex items-center rounded-full border
         border-gray-300 px-3 py-0.5 text-sm"
  >
    <span class="absolute flex-shrink-0 flex items-center justify-center">
      <span
        class="h-1.5 w-1.5 rounded-full"
        :class="[`bg-${color}-500`]"
        aria-hidden="true"
      />
    </span>
    <span class="ml-3.5 font-medium text-gray-900">
      <slot />
    </span>
  </span>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  props: {
    color: {
      type: String,
      default: 'gray',
    },
  },
});
</script>
