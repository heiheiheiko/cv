<template>
  <StageFeedItem
    :stage="stage"
    @select="$emit('select', stage)"
  >
    <BaseFeedItemTitle>
      {{ stage.title() }}
    </BaseFeedItemTitle>
    <BaseFeedItemSubtitle>
      {{ stage.subtitle() }}
    </BaseFeedItemSubtitle>
    <BaseFeedItemSubtitle>
      {{ organization.name }}
    </BaseFeedItemSubtitle>
  </StageFeedItem>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { translateI18nField } from '@/utils/i18nUtils';
import { periodInWords } from '@/utils/dateUtils';
import useOrganization from '@/composables/useOrganization';
import StageFeedItem from '@/components/StageFeedItem.vue';

export default defineComponent({
  components: {
    StageFeedItem,
  },
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
