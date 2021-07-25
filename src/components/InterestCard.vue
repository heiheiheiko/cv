<template>
  <BaseCardSimple
    tag="li"
    :color="interest.color()"
    :color-gradient="interest.colorGradient()"
    :icon="interest.icon"
  >
    {{ translateI18nField(interest.titleI18n) }}
  </BaseCardSimple>
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
