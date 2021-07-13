<template>
  <div class="px-4 py-6 sm:px-6">
    <div class="flex items-start justify-between">
      <h2
        id="slide-over-heading"
        class="text-lg font-medium text-gray-900"
      >
        <slot />
      </h2>
      <div class="ml-3 h-7 flex items-center">
        <button
          class="bg-white rounded-md text-gray-400 hover:text-gray-500
                               focus: focus:ring-2 focus:ring-indigo-500"
          @click="$emit('close')"
        >
          <span class="sr-only">Close panel</span>
          <XIcon
            class="h-6 w-6"
            aria-hidden="true"
          />
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import { XIcon } from '@heroicons/vue/outline';

export default {
  components: {
    XIcon,
  },
  emits: ['close'],
};
</script>
