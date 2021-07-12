<template>
  <div class="relative flex items-start space-x-3">
    <div class="relative">
      <BaseAvatar
        color="red"
        class="ring-8 ring-white text-white"
      >
        <FontAwesomeIcon :icon="stage.icon" />
      </BaseAvatar>
    </div>
    <div class="min-w-0 flex-1">
      <div>
        <BaseFeedItemTitle>
          {{ t(`position.${stage.position}`) }} –
          {{ t(`employment.${stage.employment}`) }}
        </BaseFeedItemTitle>
        <BaseFeedItemSubtitle>
          {{ periodInWords(stage.startedAt, stage.endedAt) }},
          {{ $d(stage.startedAt, 'short') }} - {{ endedAtOrToday }}
        </BaseFeedItemSubtitle>
        <BaseFeedItemSubtitle>
          {{ organization.name }}
        </BaseFeedItemSubtitle>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { translateI18nField } from '@/utils/i18nUtils';
import { useI18n } from 'vue-i18n';
import { periodInWords } from '@/utils/dateUtils';
import useOrganization from '@/composables/useOrganization';

export default defineComponent({
  props: {
    stage: {
      type: Object,
      required: true,
    },
  },
  setup(props) {
    const { findOrganization } = useOrganization();
    const { d, t } = useI18n({
      inheritLocale: true,
      useScope: 'local',
    });

    const endedAtOrToday = props.stage.endedAt ? d(props.stage.endedAt, 'short') : t('today');
    const organization = findOrganization(props.stage.organization);

    return {
      translateI18nField, endedAtOrToday, t, periodInWords, organization,
    };
  },
});
</script>

<i18n>
{
  "de": {
      "today": "Heute",
      "position": {
        "WEB_DEVELOPER": "Web Developer",
        "JUNIOR_SOFTWARE_DEVELOPER": "Junior Software Developer",
        "SOFTWARE_DEVELOPER": "Software Developer"
      },
      "employment": {
        "STUDENT_ASSISTANT": "Studentische Hilfskraft",
        "INTERN": "Praktikant",
        "BACHELOR": "Bachelor",
        "EMPLOYEE": "Angestellter"
      },
  },
  "en": {
      "today": "Today",
      "position": {
        "WEB_DEVELOPER": "Web Developer",
        "JUNIOR_SOFTWARE_DEVELOPER": "Junior Software Developer",
        "SOFTWARE_DEVELOPER": "Software Developer"
      },
      "employment": {
        "STUDENT_ASSISTANT": "Student assistant",
        "INTERN": "Intern",
        "BACHELOR": "Bachelor",
        "EMPLOYEE": "Employee"
      },
  }
}
</i18n>
