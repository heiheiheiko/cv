<template>
  <!-- eslint-disable max-len -->
  <div class="bg-white">
    <div class="relative overflow-hidden">
      <TalentNavigation />
      <main>
        <TalentSectionHero :talent="talent" />
        <TalentSectionFeature :features="talentFeatures" />
        <TalentSectionTestimonial :testimonial="gamerTestimonial" />
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
import useTestimonial from '@/composables/useTestimonial';

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
    const { findTestimonialByStaticId } = useTestimonial();

    const talentFeatures = findFeatures(props.talent.features);
    const gamerTestimonial = findTestimonialByStaticId('gamer');
    return { talentFeatures, gamerTestimonial };
  },
});
</script>
