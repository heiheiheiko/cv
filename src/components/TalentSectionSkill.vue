<template>
  <!-- eslint-disable max-len -->
  <div
    id="skills-section"
    class="relative bg-white py-16 sm:py-24 lg:py-32"
  >
    <div class="mx-auto max-w-md px-4 text-center sm:max-w-3xl sm:px-6 lg:px-8 lg:max-w-7xl">
      <BaseSectionHeaderTitle>
        {{ t('resources.skill.name', 2) }}
      </BaseSectionHeaderTitle>
      <BaseSectionHeaderSubtitle>
        {{ t('title') }}
      </BaseSectionHeaderSubtitle>
      <BaseSectionHeaderDescription>
        {{ t('subtitle') }}
      </BaseSectionHeaderDescription>

      <div class="mt-12">
        <div class="flex items-center justify-center">
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

        <div class="mt-10 text-left">
          <template
            v-for="skill in skillsWithUseInMonths"
            :key="skill.id"
          >
            <TransitionRoot
              appear
              :show="skill.isVisible"
              as="template"
              enter="ease-in-out duration-150"
              enter-from="opacity-0"
              enter-to="opacity-100"
              leave="ease-in-out duration-300"
              leave-from="opacity-100"
              leave-to="opacity-0"
            >
              <SkillBadge :skill="skill" />
            </TransitionRoot>
          </template>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, computed } from 'vue';
import { translateI18nField } from '@/utils/i18nUtils';
import { useI18n } from 'vue-i18n';
import { SkillTypes } from '@/db/dbTypes';
import { Filter, FilterSwitch } from '@/types';
import SkillDecorator from '@/decorators/SkillDecorator';
import SkillBadge from '@/components/SkillBadge.vue';

import { buildSkillsWithUseInMonths } from '@/services/SkillService';
import _ from 'lodash';
import { TransitionRoot } from '@headlessui/vue';

export default defineComponent({
  components: {
    TransitionRoot,
    SkillBadge,
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

    const filterSwitches = reactive([
      {
        id: 'type_keyword',
        attribute: 'type',
        value: SkillTypes.keyword,
        label: t(`resources.skill.enums.${SkillTypes.keyword}`, 2),
        isActive: true,
        color: SkillDecorator.color(SkillTypes.keyword),
      },
      {
        id: 'type_technology',
        attribute: 'type',
        value: SkillTypes.technology,
        label: t(`resources.skill.enums.${SkillTypes.technology}`, 2),
        isActive: true,
        color: SkillDecorator.color(SkillTypes.technology),
      },
      {
        id: 'type_software',
        attribute: 'type',
        value: SkillTypes.software,
        label: t(`resources.skill.enums.${SkillTypes.software}`, 2),
        isActive: true,
        color: SkillDecorator.color(SkillTypes.software),
      },
      {
        id: 'top',
        attribute: 'isTop',
        value: true,
        label: t('resources.skill.attributes.isTop', 2),
        isActive: true,
        color: 'macaroniAndCheese',
      },
    ] as Array<FilterSwitch>);

    function buildFilters() {
      const activeFilterSwitches = filterSwitches.filter((filterSwitch) => filterSwitch.isActive);
      const groupedFilterSwitches = _(activeFilterSwitches).groupBy('attribute');
      return groupedFilterSwitches.map((_filterSwitches, attribute) => ({
        attribute,
        values: _filterSwitches.map((filterSwitch) => filterSwitch.value),
      } as Filter));
    }

    const filters = computed(() => buildFilters());

    const skillsWithUseInMonths = computed(() => buildSkillsWithUseInMonths(
      props.talent.stages,
      filters.value.value(),
    ));

    return {
      translateI18nField, t, SkillTypes, filterSwitches, skillsWithUseInMonths, filters,
    };
  },
});
</script>

<i18n>
{
  "de": {
      "title": "Was ich so kann",
      "subtitle": "Bla blub",
  },
  "en": {
      "title": "Lorem ipsum",
      "subtitle": "Lorem ipsum",
  }
}
</i18n>
