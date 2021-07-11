<template>
  <div class="flow-root">
    <ul class="-mb-8">
      <li
        v-for="(stage, stageIdx) in stages"
        :key="stage.id"
      >
        <div class="relative pb-8">
          <span
            v-if="(stageIdx !== stages.length - 1)"
            class="absolute top-5 left-5 -ml-px h-full w-0.5 bg-gray-200"
            aria-hidden="true"
          />
          <StageFeedItemJob
            v-if="stage.type === StageTypes.job"
            :stage="stage"
          />
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
import { defineComponent } from 'vue';

import { StageTypes } from '@/db/dbTypes';
import StageFeedItemJob from '@/components/StageFeedItemJob.vue';

export default defineComponent({
  components: {
    StageFeedItemJob,
  },
  props: {
    stages: {
      type: Array,
      required: true,
    },
  },
  setup() {
    return {
      StageTypes,
    };
  },
});
</script>
