<template>
  <component
    :is="tag"
    class="col-span-1 flex shadow-sm rounded-md text-left"
  >
    <div
      class="flex-shrink-0 flex items-center justify-center w-16 text-white rounded-l-md"
      :class="colorClass"
    >
      <FontAwesomeIcon
        :icon="icon"
        size="lg"
        fixed-width
        aria-hidden="true"
      />
    </div>
    <div
      class="flex-1 flex items-center justify-between border-t border-r border-b
             border-gray-200 bg-white rounded-r-md truncate"
    >
      <div class="flex-1 px-4 py-2 text-2xl truncate">
        <span
          class="text-gray-900 font-medium"
        >
          <slot />
        </span>
      </div>
    </div>
  </component>
</template>

<script lang="ts">
import { computed, defineComponent } from 'vue';
import { translateI18nField } from '@/utils/i18nUtils';
import useColor from '@/composables/useColor';

export default defineComponent({
  props: {
    tag: {
      type: String,
      default: 'div',
    },
    icon: {
      type: String,
      default: 'dog',
    },
    color: {
      type: String,
      default: 'gray',
    },
    colorGradient: {
      type: String,
      default: '',
    },
  },
  setup(props) {
    const { bgOrGradientClass } = useColor();

    const colorClass = computed(() => bgOrGradientClass(props.color, props.colorGradient));

    return {
      translateI18nField, colorClass,
    };
  },
});
</script>
