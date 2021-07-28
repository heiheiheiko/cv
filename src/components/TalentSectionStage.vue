<template>
  <BaseSection id="stages-section">
    <div class="mx-auto max-w-md px-4 text-center sm:max-w-3xl sm:px-6 lg:px-8 lg:max-w-7xl">
      <BaseSectionHeaderTitle>
        {{ t('resources.stage.name', 2) }}
      </BaseSectionHeaderTitle>
      <BaseSectionHeaderSubtitle>
        {{ t('title') }}
      </BaseSectionHeaderSubtitle>
      <BaseSectionHeaderDescription>
        {{ t('subtitle') }}
      </BaseSectionHeaderDescription>

      <div class="mt-12 text-left">
        <div class="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          <StageFeed :stages="educationStages" />
          <StageFeed :stages="jobStages" />
          <StageFeed :stages="highlightStages" />
        </div>
      </div>
    </div>
  </BaseSection>
</template>

<script>
import { defineComponent } from 'vue';
import { translateI18nField } from '@/utils/i18nUtils';
import { useI18n } from 'vue-i18n';
import { ReferenceTypes } from '@/db/dbTypes';

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

    const jobStages = props.stages.filter((stage) => stage.type === ReferenceTypes.professional);
    // eslint-disable-next-line max-len
    const educationStages = props.stages.filter((stage) => stage.type === ReferenceTypes.educational);
    const highlightStages = props.stages.filter((stage) => stage.type === ReferenceTypes.personal);

    return {
      translateI18nField, t, jobStages, educationStages, highlightStages,
    };
  },
});
</script>

<i18n>
{
  "de": {
      "title": "Was ich so erlebt habe",
      "subtitle": "Bla blub",
  },
  "en": {
      "title": "Lorem ipsum",
      "subtitle": "Lorem ipsum",
  }
}
</i18n>
