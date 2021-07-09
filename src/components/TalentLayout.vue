<template>
  <!-- eslint-disable max-len -->
  <div class="bg-white">
    <div class="relative overflow-hidden">
      <TalentNavigation />
      <main>
        <TalentSectionHero :talent="talent" />
        <TalentSectionFeature :features="talentFeatures" />
        <TalentSectionTestimonial />
      </main>
      <TalentFooter />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import TalentNavigation from '@/components/TalentNavigation.vue';
import TalentSectionHero from '@/components/TalentSectionHero.vue';
import TalentSectionFeature from '@/components/TalentSectionFeature.vue';
import TalentSectionTestimonial from '@/components/TalentSectionTestimonial.vue';
import TalentFooter from '@/components/TalentFooter.vue';
import useFeature from '@/composables/useFeature';

export default defineComponent({
  components: {
    TalentNavigation,
    TalentSectionHero,
    TalentSectionFeature,
    TalentSectionTestimonial,
    TalentFooter,
  },
  props: {
    talent: {
      type: Object,
      required: true,
    },
  },
  setup(props) {
    const { findFeatures } = useFeature();

    const talentFeatures = findFeatures(props.talent.features);
    return { talentFeatures };
  },
});
</script>
