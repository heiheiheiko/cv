<template>
  <!-- eslint-disable max-len -->
  <BaseOverlaySlide
    :is-open="isOpen"
    @close="$emit('close')"
  >
    <div>
      <div class="pb-1 sm:pb-6">
        <div>
          <div
            v-if="stage.imageName"
            class="relative h-40 sm:h-56 -mt-6 mb-4 sm:mb-6 "
          >
            <img
              class="absolute h-full w-full object-cover"
              :src="getStageImageUrl(stage.imageName)"
              alt=""
            >
          </div>
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
          <div v-if="stage.descriptionI18n">
            <BaseDescriptionTerm>
              {{ $t('resources.stage.attributes.description') }}
            </BaseDescriptionTerm>
            <BaseDescriptionDetail>
              <p>
                {{ translateI18nField(stage.descriptionI18n) }}
              </p>
            </BaseDescriptionDetail>
          </div>

          <div v-if="stage.jobDescriptionI18n">
            <BaseDescriptionTerm>
              {{ $t('resources.stage.attributes.jobDescription') }}
            </BaseDescriptionTerm>
            <BaseDescriptionDetail>
              <ul class="list-disc ml-4">
                <li
                  v-for="(term, i) in translateI18nField(stage.jobDescriptionI18n).split(';')"
                  :key="i"
                >
                  {{ term }}
                </li>
              </ul>
            </BaseDescriptionDetail>
          </div>

          <div v-if="skills.length">
            <BaseDescriptionTerm>
              {{ $t('resources.stageSkill.name', 2) }}
            </BaseDescriptionTerm>

            <BaseDescriptionDetail>
              <SkillBadge
                v-for="skill in skills"
                :key="skill.id"
                class="mr-1 mb-1"
                :skill="skill"
                size="small"
              />
            </BaseDescriptionDetail>
          </div>

          <div
            v-if="organization.name"
            class="w-full border-t border-gray-300"
          />

          <h2
            v-if="organization.name"
            class="text-lg font-medium text-gray-900"
          >
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

          <div v-if="organization.organizationSize">
            <BaseDescriptionTerm>
              {{ $t('resources.organization.attributes.organizationSize') }}
            </BaseDescriptionTerm>
            <BaseDescriptionDetail>
              {{ $t(`resources.organization.enums.organizationSize.${organization.organizationSize}`) }}
            </BaseDescriptionDetail>
          </div>

          <div v-if="organization.branch">
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

<script lang="ts">
import { computed } from 'vue';
import { translateI18nField } from '@/utils/i18nUtils';

import { periodInWords } from '@/utils/dateUtils';
import useOrganization from '@/composables/useOrganization';
import useStageSkill from '@/composables/useStageSkill';
import SkillBadge from '@/components/SkillBadge.vue';

export default {
  components: { SkillBadge },
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
  setup(props: any) {
    /* eslint-disable import/no-dynamic-require */
    /* eslint-disable global-require */

    const { findOrganization } = useOrganization();
    const { findSkillsThroughStageSkills } = useStageSkill();

    const organization = computed(() => findOrganization(props.stage.organization));
    const skills = computed(() => findSkillsThroughStageSkills(props.stage.stageSkills));

    function getStageImageUrl(imageName: string) {
      return require(`../assets/images/stages/${imageName}`);
    }

    return {
      translateI18nField,
      periodInWords,
      organization,
      skills,
      getStageImageUrl,
    };
  },
};
</script>
