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
        <div class="text-sm font-medium text-gray-900">
          {{ t(`position.${stage.position}`) }} –
          {{ t(`employment.${stage.employment}`) }}
        </div>
        <p class="mt-0.5 text-sm text-gray-500">
          {{ periodInWords(stage.startedAt, stage.endedAt) }},
          {{ $d(stage.startedAt, 'short') }} - {{ endedAtOrToday }}
        </p>
      </div>
      <div class="mt-2 text-sm text-gray-700">
        <p>
          {{ translateI18nField(stage.descriptionI18n) }}
        </p>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { translateI18nField } from '@/utils/i18nUtils';
import { useI18n } from 'vue-i18n';
import { periodInWords } from '@/utils/dateUtils';
import BaseAvatar from '@/components/BaseAvatar.vue';

export default defineComponent({
  components: {
    BaseAvatar,
  },
  props: {
    stage: {
      type: Object,
      required: true,
    },
  },
  setup(props) {
    const { d, t } = useI18n({
      inheritLocale: true,
      useScope: 'local',
    });

    // const periodInWords = (stage: Stage) => {
    //   const totalMonths = dateDifferenceInMonth(stage.startedAt, stage.endedAt || new Date());
    //   const years = Math.floor(totalMonths / 12);
    //   const months = totalMonths % 12;
    //   console.log(years);

    //   const translatedMonths = `${months} ${t('datetime.month', months)}`;
    //   const translatedYears = `${years} ${t('datetime.year', years)}`;

    //   const result = [];
    //   if (months > 0) { result.push(translatedMonths); }
    //   if (years > 0) { result.push(translatedYears); }

    //   return result.join(` ${t('general.and')} `);
    // };

    const endedAtOrToday = props.stage.endedAt ? d(props.stage.endedAt, 'short') : t('today');

    return {
      translateI18nField, endedAtOrToday, t, periodInWords,
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
