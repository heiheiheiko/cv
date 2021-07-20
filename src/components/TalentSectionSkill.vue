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
        <BaseBadge
          v-for="skill in skills"
          :key="skill.id"
          :color="skill.color()"
          size="large"
          class="mr-2 mb-2"
        >
          {{ translateI18nField(skill.titleI18n) }}
        </BaseBadge>
      </div>
    </div>
  </div>
</template>

<script>
import { defineComponent } from 'vue';
import { translateI18nField } from '@/utils/i18nUtils';
import { useI18n } from 'vue-i18n';

export default defineComponent({
  props: {
    skills: {
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
      "title": "Skills",
      "subtitle": "Was ich kann",
      "description": "Bla blub",
  },
  "en": {
      "title": "Lorem ipsum",
      "subtitle": "Lorem ipsum",
      "description": "Lorem ipsum",
  }
}
</i18n>
