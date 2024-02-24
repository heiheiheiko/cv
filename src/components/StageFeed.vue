<template>
  <div>
    <div class="flow-root">
      <ul class="-mb-8">
        <li v-for="stage in stages" :key="stage.id">
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
                v-if="!isLastVisibleStage(stage)"
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
    <StageOverlay :stage="overlayStage" :is-open="isOverlayOpen" @close="isOverlayOpen = false" />
  </div>
</template>

<script>
import { defineComponent, ref } from 'vue'
import { ReferenceTypes } from '@/db/dbTypes'
import StageFeedItem from '@/components/StageFeedItem.vue'
import StageOverlay from '@/components/StageOverlay.vue'
import { TransitionRoot } from '@headlessui/vue'
import _ from 'lodash'

export default defineComponent({
  components: {
    StageFeedItem,
    StageOverlay,
    TransitionRoot
  },
  props: {
    stages: {
      type: Array,
      required: true
    }
  },
  setup(props) {
    const isOverlayOpen = ref(false)
    const overlayStage = ref({})
    // eslint-disable-next-line max-len
    const isLastVisibleStage = (stage) =>
      stage === _.last(props.stages.filter((_stage) => _stage.isVisible))

    const setOverlayStage = (stage) => {
      isOverlayOpen.value = true
      overlayStage.value = stage
    }
    return {
      ReferenceTypes,
      overlayStage,
      setOverlayStage,
      isOverlayOpen,
      isLastVisibleStage
    }
  }
})
</script>
