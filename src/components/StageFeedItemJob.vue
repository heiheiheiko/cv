<template>
  <div class="relative flex items-start space-x-3">
    <div class="relative">
      <BaseAvatar
        color="red"
        class="ring-8 ring-white text-white"
      >
        <FontAwesomeIcon :icon="stage.icon" />
      </BaseAvatar>
    </div>
    <div class="min-w-0 flex-1">
      <div>
        <BaseFeedItemTitle>
          {{ jobTitleDeco(stage) }}
        </BaseFeedItemTitle>
        <BaseFeedItemSubtitle>
          {{ jobSubtitleDeco(stage) }}
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
import useStage from '@/composables/useStage';

export default defineComponent({
  props: {
    stage: {
      type: Object,
      required: true,
    },
  },
  setup(props) {
    const { findOrganization } = useOrganization();
    const { jobTitleDeco, jobSubtitleDeco } = useStage();
    const organization = findOrganization(props.stage.organization);

    return {
      translateI18nField, periodInWords, organization, jobTitleDeco, jobSubtitleDeco,
    };
  },
});
</script>
