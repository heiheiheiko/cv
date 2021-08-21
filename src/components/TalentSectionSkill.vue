<template>
  <BaseSection id="skills-section">
    <div class="mx-auto max-w-md px-4 text-center sm:max-w-3xl sm:px-6 lg:px-8 lg:max-w-7xl">
      <BaseSectionHeaderTitle>
        {{ t('resources.skill.name', 2) }}
      </BaseSectionHeaderTitle>
      <BaseSectionHeaderSubtitle>
        {{ t('title') }}
      </BaseSectionHeaderSubtitle>

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
              <SkillBadge
                :skill="skill"
                class="mr-2 mb-2"
              />
            </TransitionRoot>
          </template>
        </div>
      </div>
    </div>
  </BaseSection>
</template>

<script lang="ts">
import { defineComponent, reactive, computed } from 'vue';
import { translateI18nField } from '@/utils/i18nUtils';
import { useI18n } from 'vue-i18n';
import { SkillTypes } from '@/db/dbTypes';
import { FilterSwitch } from '@/types';
import SkillDecorator from '@/decorators/SkillDecorator';
import SkillBadge from '@/components/SkillBadge.vue';
import useFilterable from '@/composables/useFilterable';

import { buildSkillsWithUseInMonths } from '@/services/SkillService';
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

    const { buildFilters } = useFilterable();

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

    const filters = computed(() => buildFilters(filterSwitches));

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
  },
  "en": {
      "title": "What I can",
  }
}
</i18n>
