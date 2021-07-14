<template>
  <div
    class="relative flex items-start space-x-3"
    @click="$emit('select', stage)"
  >
    <div class="relative">
      <BaseAvatar
        :color="stage.color()"
        class="ring-8 ring-white text-white"
      >
        <FontAwesomeIcon :icon="stage.icon" />
      </BaseAvatar>
    </div>
    <div class="min-w-0 flex-1">
      <slot />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  props: {
    stage: {
      type: Object,
      required: true,
    },
  },
  emits: ['select'],
});
</script>
