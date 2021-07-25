<template>
  <component
    :is="tag"
    class="col-span-1 flex shadow-sm rounded-md text-left"
  >
    <div
      :class="[`bg-${interest.color()}-500 flex-shrink-0 flex items-center justify-center
                      w-16 text-white text-sm font-medium rounded-l-md`]"
    >
      <FontAwesomeIcon
        :icon="interest.icon"
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
          {{ translateI18nField(interest.titleI18n) }}
        </span>
      </div>
    </div>
  </component>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { translateI18nField } from '@/utils/i18nUtils';

export default defineComponent({
  props: {
    interest: {
      type: Object,
      required: true,
    },
    tag: {
      type: String,
      default: 'div',
    },
  },
  setup() {
    return {
      translateI18nField,
    };
  },
});
</script>
