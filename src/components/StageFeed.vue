<template>
  <div>
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
            <StageFeedItem
              v-if="stage.type === ReferenceTypes.professional"
              :stage="stage"
              @select="setOverlayStage"
            />

            <StageFeedItem
              v-if="stage.type === ReferenceTypes.educational"
              :stage="stage"
              @select="setOverlayStage"
            />

            <StageFeedItem
              v-if="stage.type === ReferenceTypes.personal"
              :stage="stage"
              @select="setOverlayStage"
            />
          </div>
        </li>
      </ul>
    </div>
    <StageOverlay
      :stage="overlayStage"
      :is-open="isOverlayOpen"
      @close="isOverlayOpen=false"
    />
  </div>
</template>

<script>
import { defineComponent, ref } from 'vue';
import { ReferenceTypes } from '@/db/dbTypes';
import StageFeedItem from '@/components/StageFeedItem.vue';
import StageOverlay from '@/components/StageOverlay.vue';

export default defineComponent({
  components: {
    StageFeedItem,
    StageOverlay,
  },
  props: {
    stages: {
      type: Array,
      required: true,
    },
  },
  setup() {
    const isOverlayOpen = ref(false);
    const overlayStage = ref({});

    const setOverlayStage = (stage) => {
      isOverlayOpen.value = true;
      overlayStage.value = stage;
    };
    return {
      ReferenceTypes, overlayStage, setOverlayStage, isOverlayOpen,
    };
  },
});
</script>
