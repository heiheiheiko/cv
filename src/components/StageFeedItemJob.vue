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
      <div>
        <BaseFeedItemTitle>
          {{ stage.title() }}
        </BaseFeedItemTitle>
        <BaseFeedItemSubtitle>
          {{ stage.subtitle() }}
        </BaseFeedItemSubtitle>
        <BaseFeedItemSubtitle>
          {{ organization.name }}
        </BaseFeedItemSubtitle>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { translateI18nField } from '@/utils/i18nUtils';
import { periodInWords } from '@/utils/dateUtils';
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
      translateI18nField, periodInWords, organization,
    };
  },
});
</script>
