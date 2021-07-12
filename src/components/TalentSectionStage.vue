<template>
  <!-- eslint-disable max-len -->
  <div class="relative bg-white py-16 sm:py-24 lg:py-32">
    <div class="mx-auto max-w-md px-4 text-center sm:max-w-3xl sm:px-6 lg:px-8 lg:max-w-7xl">
      <BaseSectionHeaderTitle>
        {{ t('title') }}
      </BaseSectionHeaderTitle>
      <BaseSectionHeaderSubtitle>
        {{ t('subtitle') }}
      </BaseSectionHeaderSubtitle>
      <BaseSectionHeaderDescription>
        {{ t('description') }}
      </BaseSectionHeaderDescription>

      <div class="mt-12 text-left">
        <div class="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          <StageFeed :stages="jobStages" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { defineComponent } from 'vue';
import { translateI18nField } from '@/utils/i18nUtils';
import { useI18n } from 'vue-i18n';
import { StageTypes } from '@/db/dbTypes';

import StageFeed from '@/components/StageFeed.vue';

export default defineComponent({
  components: {
    StageFeed,
  },
  props: {
    stages: {
      type: Array,
      required: true,
    },
  },
  setup(props) {
    const { t } = useI18n({
      inheritLocale: true,
      useScope: 'local',
    });

    const jobStages = props.stages.filter((stage) => stage.type === StageTypes.job);
    // const educationStages = props.stages.filter((stage) => stage.type === StageTypes.education);
    // const highlightStages = props.stages.filter((stage) => stage.type === StageTypes.highlight);

    return {
      translateI18nField, t, jobStages, // educationStages, highlightStages,
    };
  },
});
</script>

<i18n>
{
  "de": {
      "title": "Feed",
      "subtitle": "Mein Werdegang",
      "description": "Bla blub",
  },
  "en": {
      "title": "Lorem ipsum",
      "subtitle": "Lorem ipsum",
      "description": "Lorem ipsum",
  }
}
</i18n>
