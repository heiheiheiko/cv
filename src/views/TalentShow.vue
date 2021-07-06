<template>
  <AppLayout>
    <TraitSection :traits="traits" />
    <pre>
      {{ talent }}
    </pre>
    <BaseSection>
      <BaseSectionTitle> Title </BaseSectionTitle>
      <BaseSectionBody> Content </BaseSectionBody>
    </BaseSection>
  </AppLayout>
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue';
import { useRoute } from 'vue-router';
import AppLayout from '@/components/AppLayout.vue';
import BaseSection from '@/components/BaseSection.vue';
import BaseSectionTitle from '@/components/BaseSectionTitle.vue';
import BaseSectionBody from '@/components/BaseSectionBody.vue';
import useTalent from '@/composables/useTalent';
import useTrait from '@/composables/useTrait';
import TraitSection from '@/components/TraitSection.vue';

export default defineComponent({
  name: 'HomePage',
  components: {
    AppLayout,
    BaseSection,
    BaseSectionTitle,
    BaseSectionBody,
    TraitSection,
  },
  setup() {
    const route = useRoute();
    const { findTalent, fetchTalents } = useTalent();
    const { findTraits } = useTrait();

    const talentId = parseInt(route.params.id as string, 10);
    const talent = computed(() => findTalent(talentId));
    const traits = computed(() => findTraits(talent.value.traits));

    return {
      findTalent, fetchTalents, talent, traits,
    };
  },
  created() {
    this.fetchTalents();
  },
});
</script>
