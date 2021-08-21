<template>
  <BaseBadge>
    <BaseBadgePrepand>
      <BaseDot
        :size="size"
        :color="skill.color()"
      />
    </BaseBadgePrepand>
    <BaseBadgeBody :size="size">
      {{ translateI18nField(skill.titleI18n) }}
    </BaseBadgeBody>
    <span
      v-if="skill.useInMonths"
      class="text-gray-500 text-lg ml-2"
    >
      {{ skill.usageInWords() }}
    </span>
  </BaseBadge>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { translateI18nField } from '@/utils/i18nUtils';

export default defineComponent({
  props: {
    skill: {
      type: Object,
      required: true,
    },
    size: {
      type: String,
      default: 'large',
    },
  },
  setup() {
    return {
      translateI18nField,
    };
  },
});
</script>
