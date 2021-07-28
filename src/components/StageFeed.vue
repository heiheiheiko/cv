<template>
  <div>
    <div class="flow-root">
      <ul class="-mb-8">
        <li
          v-for="(stage, stageIdx) in stages"
          :key="stage.id"
        >
          <TransitionRoot
            appear
            :show="stage.isVisible"
            as="template"
            enter="ease-in-out duration-150"
            enter-from="opacity-0"
            enter-to="opacity-100"
            leave="ease-in-out duration-300"
            leave-from="opacity-100"
            leave-to="opacity-0"
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
          </TransitionRoot>
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
import { TransitionRoot } from '@headlessui/vue';

export default defineComponent({
  components: {
    StageFeedItem,
    StageOverlay,
    TransitionRoot,
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
