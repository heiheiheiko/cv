<template>
  <BaseSection id="features-section">
    <div class="mx-auto max-w-md px-4 text-center sm:max-w-3xl sm:px-6 lg:px-8 lg:max-w-7xl">
      <BaseSectionHeaderTitle>
        {{ t('resources.feature.name', 2) }}
      </BaseSectionHeaderTitle>
      <BaseSectionHeaderSubtitle>
        {{ t('title') }}
      </BaseSectionHeaderSubtitle>

      <div class="mt-12">
        <div class="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          <BaseCardFeature
            v-for="feature in features"
            :key="feature.id"
          >
            <BaseCardFeatureIcon :icon="feature.icon" />
            <BaseCardFeatureTitle>
              {{ translateI18nField(feature.titleI18n) }}
            </BaseCardFeatureTitle>
            <BaseCardFeatureDescription>
              {{ translateI18nField(feature.descriptionI18n) }}
            </BaseCardFeatureDescription>
          </BaseCardFeature>
        </div>
      </div>
    </div>
  </BaseSection>
</template>

<script>
import { defineComponent } from 'vue';
import { translateI18nField } from '@/utils/i18nUtils';
import { useI18n } from 'vue-i18n';

export default defineComponent({
  props: {
    features: {
      type: Array,
      required: true,
    },
  },
  setup() {
    const { t } = useI18n({
      inheritLocale: true,
      useScope: 'local',
    });

    return {
      translateI18nField, t,
    };
  },
});
</script>

<i18n>
{
  "de": {
      "title": "Was mich so ausmacht",
  },
  "en": {
      "title": "What makes me special",
  }
}
</i18n>
