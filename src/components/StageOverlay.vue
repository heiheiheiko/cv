<template>
  <!-- eslint-disable max-len -->
  <BaseOverlaySlide
    :is-open="isOpen"
    @close="$emit('close')"
  >
    <div>
      <div class="pb-1 sm:pb-6">
        <div>
          <div class="px-4 sm:flex sm:items-end sm:px-6">
            <div class="sm:flex-1">
              <div>
                <div class="flex items-center">
                  <h3 class="font-bold text-xl text-gray-900 sm:text-2xl">
                    {{ stage.title() }}
                  </h3>
                </div>
                <p class="text-sm text-gray-500">
                  {{ stage.subtitle() }}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="px-4 pt-5 pb-5 sm:px-0 sm:pt-0">
        <BaseDescriptionList>
          <div>
            <BaseDescriptionTerm>
              {{ $t('resources.stage.attributes.description') }}
            </BaseDescriptionTerm>
            <BaseDescriptionDetail>
              <p>
                {{ translateI18nField(stage.descriptionI18n) }}
              </p>
            </BaseDescriptionDetail>
          </div>

          <div>
            <BaseDescriptionTerm>
              {{ $t('resources.stageSkill.name', 2) }}
            </BaseDescriptionTerm>

            <BaseDescriptionDetail>
              <BaseBadge
                v-for="skill in skills"
                :key="skill.id"
                class="mr-1 mb-1"
                :color="skill.color()"
              >
                {{ translateI18nField(skill.titleI18n) }}
              </BaseBadge>
            </BaseDescriptionDetail>
          </div>

          <div class="w-full border-t border-gray-300" />

          <h2 class="text-lg font-medium text-gray-900">
            {{ organization.name }}
          </h2>

          <div v-if="organization.street && organization.zip && organization.city">
            <BaseDescriptionTerm>
              {{ $t('resources.organization.attributes.location') }}
            </BaseDescriptionTerm>
            <BaseDescriptionDetail>
              {{ organization.location() }}
            </BaseDescriptionDetail>
          </div>

          <div v-if="organization.website">
            <BaseDescriptionTerm>
              {{ $t('resources.organization.attributes.website') }}
            </BaseDescriptionTerm>
            <BaseDescriptionDetail>
              {{ organization.website }}
            </BaseDescriptionDetail>
          </div>

          <div>
            <BaseDescriptionTerm>
              {{ $t('resources.organization.attributes.organizationSize') }}
            </BaseDescriptionTerm>
            <BaseDescriptionDetail>
              {{ $t(`resources.organization.enums.organizationSize.${organization.organizationSize}`) }}
            </BaseDescriptionDetail>
          </div>

          <div>
            <BaseDescriptionTerm>
              {{ $t('resources.organization.attributes.branch') }}
            </BaseDescriptionTerm>
            <BaseDescriptionDetail>
              {{ $t(`resources.organization.enums.branch.${organization.branch}`) }}
            </BaseDescriptionDetail>
          </div>
        </BaseDescriptionList>
      </div>
    </div>
  </BaseOverlaySlide>
</template>

<script>
import { computed } from 'vue';
import { translateI18nField } from '@/utils/i18nUtils';

import { periodInWords } from '@/utils/dateUtils';
import useOrganization from '@/composables/useOrganization';
import useStageSkill from '@/composables/useStageSkill';

export default {
  props: {
    stage: {
      type: Object,
      required: true,
    },
    isOpen: {
      type: Boolean,
      required: true,
    },
  },
  emits: ['close'],
  setup(props) {
    const { findOrganization } = useOrganization();
    const { findSkillsThroughStageSkills } = useStageSkill();

    const organization = computed(() => findOrganization(props.stage.organization));
    const skills = computed(() => findSkillsThroughStageSkills(props.stage.stageSkills));

    return {
      translateI18nField,
      periodInWords,
      organization,
      skills,
    };
  },
};
</script>
