<template>
  <!-- eslint-disable max-len -->
  <div class="bg-white">
    <div class="relative overflow-hidden">
      <TalentNavigation />
      <main>
        <TalentSectionHero :talent="talent" />
        <TalentSectionStatement :statements="talentStatements" />
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
import TalentSectionStatement from '@/components/TalentSectionStatement.vue';
import TalentSectionTestimonial from '@/components/TalentSectionTestimonial.vue';
import TalentFooter from '@/components/TalentFooter.vue';
import useStatment from '@/composables/useStatement';

export default defineComponent({
  components: {
    TalentNavigation,
    TalentSectionHero,
    TalentSectionStatement,
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
    const { findStatements } = useStatment();

    const talentStatements = findStatements(props.talent.statements);
    return { talentStatements };
  },
});
</script>
