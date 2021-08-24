<template>
  <BaseSection id="stages-section">
    <div
      class="mx-auto max-w-md px-4 text-center sm:max-w-3xl sm:px-6 lg:px-8 lg:max-w-8xl"
    >
      <BaseSectionHeaderTitle>
        {{ t('resources.stage.name', 2) }}
      </BaseSectionHeaderTitle>
      <BaseSectionHeaderSubtitle>
        {{ t('title') }}
      </BaseSectionHeaderSubtitle>

      <div class="mt-12 text-left ">
        <div class="flex items-center justify-center hidden md:flex">
          <BaseSwitch
            v-for="filter in filterSwitches"
            :key="filter.id"
            :is-active="filter.isActive"
            class="mr-5"
            :color="filter.color"
            @update="filter.isActive = !filter.isActive"
          >
            {{ filter.label }}
          </BaseSwitch>
        </div>

        <div class="mt-10 grid grid-cols-1 gap-12 lg:grid-cols-3">
          <StageFeed :stages="filteredEducationalStages" />
          <StageFeed :stages="filteredProfessionalStages" />
          <StageFeed :stages="filteredPersonalStages" />
        </div>
      </div>
    </div>
  </BaseSection>
</template>

<script lang="ts">
import { defineComponent, reactive, computed } from 'vue';

import { translateI18nField } from '@/utils/i18nUtils';
import { useI18n } from 'vue-i18n';
import ReferenceTypesDecorator from '@/decorators/ReferenceTypesDecorator';
import { ReferenceTypes } from '@/db/dbTypes';
import { FilterSwitch } from '@/types';
import useFilterable from '@/composables/useFilterable';
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

    const { buildFilters, filterFilterables } = useFilterable();

    const filterSwitches = reactive([
      {
        id: 'type_educational',
        attribute: 'type',
        value: ReferenceTypes.educational,
        label: t(`resources.stage.enums.type.${ReferenceTypes.educational}`, 2),
        isActive: true,
        color: ReferenceTypesDecorator.color(ReferenceTypes.educational),
      },
      {
        id: 'type_professional',
        attribute: 'type',
        value: ReferenceTypes.professional,
        label: t(`resources.stage.enums.type.${ReferenceTypes.professional}`, 2),
        isActive: true,
        color: ReferenceTypesDecorator.color(ReferenceTypes.professional),
      },
      {
        id: 'type_personal',
        attribute: 'type',
        value: ReferenceTypes.personal,
        label: t(`resources.stage.enums.type.${ReferenceTypes.personal}`, 2),
        isActive: true,
        color: ReferenceTypesDecorator.color(ReferenceTypes.personal),
      },
      {
        id: 'top',
        attribute: 'isTop',
        value: true,
        label: t('resources.stage.attributes.isTop', 2),
        isActive: true,
        color: 'macaroniAndCheese',
      },
    ] as Array<FilterSwitch>);

    const filters = computed(() => buildFilters(filterSwitches));

    const professionalStages: any = props.stages
      .filter((stage: any) => stage.type === ReferenceTypes.professional);
    const filteredProfessionalStages = computed(() => filterFilterables(
      professionalStages, filters.value as any, ['startedAt', 'desc'],
    ));

    const educationalStages: any = props.stages
      .filter((stage: any) => stage.type === ReferenceTypes.educational);
    const filteredEducationalStages = computed(() => filterFilterables(
      educationalStages, filters.value as any, ['startedAt', 'desc'],
    ));

    const personalStages: any = props.stages
      .filter((stage: any) => stage.type === ReferenceTypes.personal);
    const filteredPersonalStages = computed(() => filterFilterables(
      personalStages, filters.value as any, ['startedAt', 'desc'],
    ));

    return {
      translateI18nField,
      t,
      filteredProfessionalStages,
      filteredEducationalStages,
      filteredPersonalStages,
      filterSwitches,
    };
  },
});
</script>

<i18n>
{
  "de": {
      "title": "Was ich so gemacht habe"
  },
  "en": {
      "title": "What I have done"
  }
}
</i18n>
