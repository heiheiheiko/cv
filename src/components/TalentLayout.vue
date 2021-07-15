<template>
  <!-- eslint-disable max-len -->
  <div class="bg-white">
    <div class="relative overflow-hidden">
      <TalentNavigation />
      <main>
        <TalentSectionHero :talent="talent" />
        <TalentSectionFeature :features="talentFeatures" />
        <TalentSectionTestimonial :testimonial="gamerTestimonial" />
        <TalentSectionStage :stages="talentStages" />
        <TalentSectionTestimonial :testimonial="explorerTestimonial" />
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
import TalentSectionStage from '@/components/TalentSectionStage.vue';
import TalentFooter from '@/components/TalentFooter.vue';
import useFeature from '@/composables/useFeature';
import useTestimonial from '@/composables/useTestimonial';
import useStages from '@/composables/useStage';

export default defineComponent({
  components: {
    TalentNavigation,
    TalentSectionHero,
    TalentSectionFeature,
    TalentSectionTestimonial,
    TalentSectionStage,
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
    const { findTestimonialByStaticId } = useTestimonial();
    const { findStages } = useStages();

    const talentFeatures = findFeatures(props.talent.features);
    const gamerTestimonial = findTestimonialByStaticId('gamer');
    const explorerTestimonial = findTestimonialByStaticId('explorer');
    const talentStages = findStages(props.talent.stages);
    return {
      talentFeatures, gamerTestimonial, talentStages, explorerTestimonial,
    };
  },
});
</script>
