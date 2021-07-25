<template>
  <!-- eslint-disable max-len -->

  <div
    id="interests-section"
    class="relative bg-white py-16 sm:py-24 lg:py-32"
  >
    <div class="mx-auto max-w-md px-4 text-center sm:max-w-3xl sm:px-6 lg:px-8 lg:max-w-7xl">
      <BaseSectionHeaderTitle>
        {{ t('resources.interest.name', 2) }}
      </BaseSectionHeaderTitle>
      <BaseSectionHeaderSubtitle>
        {{ t('title') }}
      </BaseSectionHeaderSubtitle>
      <BaseSectionHeaderDescription>
        {{ t('subtitle') }}
      </BaseSectionHeaderDescription>

      <ul class="mt-12 grid grid-cols-1 gap-5 sm:gap-6 sm:grid-cols-2 lg:grid-cols-3">
        <InterestCard
          v-for="interest in interests"
          :key="interest.id"
          :interest="interest"
          tag="li"
        />
      </ul>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { translateI18nField } from '@/utils/i18nUtils';
import { useI18n } from 'vue-i18n';
import useInterest from '@/composables/useInterest';
import InterestCard from '@/components/InterestCard.vue';

export default defineComponent({
  components: {
    InterestCard,
  },
  props: {
    talent: {
      type: Object,
      required: true,
    },
  },
  setup(props) {
    const { t } = useI18n({
      inheritLocale: true,
      useScope: 'local',
    });

    const { findInterests } = useInterest();

    const interests = findInterests(props.talent.interests);

    return {
      translateI18nField, t, interests,
    };
  },
});
</script>

<i18n>
{
  "de": {
      "title": "Was mich so interssiert",
      "subtitle": "Bla blub",
  },
  "en": {
      "title": "Lorem ipsum",
      "subtitle": "Lorem ipsum",
  }
}
</i18n>
