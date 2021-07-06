<template>
  <AppLayout>
    <TraitSection :traits="traits" />
    <pre>
      {{ applicant }}
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
import useApplicant from '@/composables/useApplicant';
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
    const { findApplicant, fetchApplicants } = useApplicant();
    const { findTraits } = useTrait();

    const apllicantId = parseInt(route.params.id as string, 10);
    const applicant = computed(() => findApplicant(apllicantId));
    const traits = computed(() => findTraits(applicant.value.traits));

    return {
      findApplicant, fetchApplicants, applicant, traits,
    };
  },
  created() {
    this.fetchApplicants();
  },
});
</script>
