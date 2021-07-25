<template>
  <span
    class="relative inline-flex items-center rounded-full border
         border-gray-300 px-3 py-0.5 text-sm"
  >
    <span class="absolute flex-shrink-0 flex items-center justify-center">
      <span
        class="rounded-full"
        :class="[`bg-${color}`, dotSizeClass[size]]"
        aria-hidden="true"
      />
    </span>
    <span
      class="font-medium text-gray-900"
      :class="[textSizeClass[size], textSpaceClass[size]]"
    >
      <slot />
    </span>
  </span>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

const dotSizeClass = {
  tiny: 'h-1 w-1',
  small: 'h-1.5 w-1.5',
  normal: 'h-1.5 w-1.5',
  large: 'h-2.5 w-2.5',
  huge: 'h-3.5 w-3.5',
} as any;

const textSpaceClass = {
  tiny: 'ml-2.5',
  small: 'ml-3.5',
  normal: 'ml-3.5',
  large: 'ml-5',
  huge: 'ml-6',
} as any;

const textSizeClass = {
  tiny: 'text-xs',
  small: 'text-sm',
  normal: 'text-base',
  large: 'text-2xl',
  huge: 'text-4xl',
} as any;

export default defineComponent({
  props: {
    color: {
      type: String,
      default: 'gray',
    },
    size: {
      type: String,
      default: 'normal',
    },
  },
  setup() {
    return { dotSizeClass, textSizeClass, textSpaceClass };
  },
});
</script>
