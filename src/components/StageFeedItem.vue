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
      <BaseFeedItemTitle>
        {{ stage.title() }}
      </BaseFeedItemTitle>
      <BaseFeedItemSubtitle>
        {{ stage.subtitle() }}
      </BaseFeedItemSubtitle>
      <BaseFeedItemSubtitle v-if="organization">
        {{ organization.name }}
      </BaseFeedItemSubtitle>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import useOrganization from '@/composables/useOrganization';

export default defineComponent({
  props: {
    stage: {
      type: Object,
      required: true,
    },
  },
  emits: ['select'],
  setup(props) {
    const { findOrganization } = useOrganization();
    const organization = findOrganization(props.stage.organization);

    return {
      organization,
    };
  },
});
</script>
