<template>
  <span
    class="rounded-full"
    :class="[`bg-${color}`, dotSizeClass[size]]"
    aria-hidden="true"
  />
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { Dimension } from '@/types';

const dotSizeClass = {
  tiny: 'h-1 w-1',
  small: 'h-1.5 w-1.5',
  normal: 'h-1.5 w-1.5',
  large: 'h-2.5 w-2.5',
  huge: 'h-3.5 w-3.5',
} as Dimension;

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
    return { dotSizeClass };
  },
});
</script>
