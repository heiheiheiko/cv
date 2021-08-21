<template>
  <span
    class="text-gray-900"
    :class="[textSizeClass[size], textSpaceClass[size]]"
  >
    <slot />
  </span>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { Dimension } from '@/types';

const textSpaceClass = {
  tiny: 'ml-2.5',
  small: 'ml-3.5',
  normal: 'ml-3.5',
  large: 'ml-5',
  huge: 'ml-6',
} as Dimension;

const textSizeClass = {
  tiny: 'text-xs',
  small: 'text-sm',
  normal: 'text-base',
  large: 'text-2xl',
  huge: 'text-4xl',
} as Dimension;

export default defineComponent({
  props: {
    size: {
      type: String,
      default: 'normal',
    },
  },
  setup() {
    return { textSizeClass, textSpaceClass };
  },
});
</script>
