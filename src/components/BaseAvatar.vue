<template>
  <div
    class="flex items-center justify-center rounded-full"
    :class="[sizeClass[size], colorClass]"
  >
    <slot />
  </div>
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue';
import useColor from '@/composables/useColor';
import { Size } from '@/types';

const sizeClass = {
  tiny: 'h-6 w-6',
  small: 'h-8 w-8',
  normal: 'h-10 w-10',
  large: 'h-12 w-12',
  huge: 'h-14 w-14',
} as Size;

export default defineComponent({
  props: {
    color: {
      type: String,
      default: 'gray',
    },
    colorGradient: {
      type: String,
      default: '',
    },
    size: {
      type: String,
      default: 'normal',
    },
  },
  setup(props) {
    const { bgOrGradientClass } = useColor();

    const colorClass = computed(() => bgOrGradientClass(props.color, props.colorGradient));
    return { sizeClass, colorClass };
  },
});
</script>
