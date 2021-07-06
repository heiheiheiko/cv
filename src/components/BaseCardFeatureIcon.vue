<template>
  <div>
    <span
      class="inline-flex items-center justify-center p-3 bg-gradient-to-r
           from-teal-500 to-cyan-600 rounded-md shadow-lg"
    >
      <component
        :is="icon"
        class="h-6 w-6 text-white"
        aria-hidden="true"
      />
    </span>
  </div>
</template>

<script>
import { defineComponent } from 'vue';

export default defineComponent({
  props: {
    icon: {
      type: Object,
      required: true,
    },
  },
});
</script>
