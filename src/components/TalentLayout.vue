<template>
  <!-- eslint-disable max-len -->
  <div class="bg-white">
    <div class="relative overflow-hidden">
      <TalentNavigation />
      <main>
        <TalentSectionHero />
        <TalentSectionFeature />
        <TalentSectionTestimonial />
      </main>
      <TalentFooter />
    </div>
  </div>
</template>

<script>
import { defineComponent } from 'vue';
import TalentNavigation from '@/components/TalentNavigation.vue';
import TalentSectionHero from '@/components/TalentSectionHero.vue';
import TalentSectionFeature from '@/components/TalentSectionFeature.vue';
import TalentSectionTestimonial from '@/components/TalentSectionTestimonial.vue';
import TalentFooter from '@/components/TalentFooter.vue';

export default defineComponent({
  components: {
    TalentNavigation,
    TalentSectionHero,
    TalentSectionFeature,
    TalentSectionTestimonial,
    TalentFooter,
  },
});
</script>
