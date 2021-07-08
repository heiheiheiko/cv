<template>
  <div>
    <span
      class="inline-flex items-center justify-center p-3 bg-gradient-to-r
           from-teal-500 to-cyan-600 rounded-md shadow-lg"
    >
      <span class="h-6 w-6 text-white">
        <FontAwesomeIcon
          icon="dog"
          size="lg"
          fixed-width
          aria-hidden="true"
        />
      </span>
    </span>
  </div>
</template>

<script>
import { defineComponent } from 'vue';

export default defineComponent({
  props: {
    icon: {
      type: String,
      required: true,
    },
  },
});
</script>
