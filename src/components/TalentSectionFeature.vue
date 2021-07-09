<template>
  <div class="relative bg-white py-16 sm:py-24 lg:py-32">
    <div class="mx-auto max-w-md px-4 text-center sm:max-w-3xl sm:px-6 lg:px-8 lg:max-w-7xl">
      <BaseSectionHeaderTitle>
        Deploy faster
      </BaseSectionHeaderTitle>
      <BaseSectionHeaderSubtitle>
        Everything you need to deploy your app
      </BaseSectionHeaderSubtitle>
      <BaseSectionHeaderDescription>
        Phasellus lorem quam molestie id quisque diam aenean nulla in.
        Accumsan in quis quis nunc, ullamcorper malesuada. Eleifend condimentum id viverra nulla.
      </BaseSectionHeaderDescription>

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
  </div>
</template>

<script>
import { defineComponent } from 'vue';
import { translateI18nField } from '@/utils/i18nUtils';

import BaseSectionHeaderTitle from '@/components/BaseSectionHeaderTitle.vue';
import BaseSectionHeaderSubtitle from '@/components/BaseSectionHeaderSubtitle.vue';
import BaseSectionHeaderDescription from '@/components/BaseSectionHeaderDescription.vue';
import BaseCardFeature from '@/components/BaseCardFeature.vue';
import BaseCardFeatureTitle from '@/components/BaseCardFeatureTitle.vue';
import BaseCardFeatureDescription from '@/components/BaseCardFeatureDescription.vue';
import BaseCardFeatureIcon from '@/components/BaseCardFeatureIcon.vue';

export default defineComponent({
  components: {
    BaseSectionHeaderTitle,
    BaseSectionHeaderSubtitle,
    BaseSectionHeaderDescription,
    BaseCardFeature,
    BaseCardFeatureIcon,
    BaseCardFeatureTitle,
    BaseCardFeatureDescription,
  },
  props: {
    features: {
      type: Array,
      required: true,
    },
  },
  setup() {
    return {
      translateI18nField,
    };
  },
});
</script>
