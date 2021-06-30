<template>
  <AppLayout>
    <BaseSection>
      <BaseSectionTitle> Title </BaseSectionTitle>
      <BaseSectionBody> Content </BaseSectionBody>
    </BaseSection>
  </AppLayout>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import AppLayout from '@/components/AppLayout.vue';
import BaseSection from '@/components/BaseSection.vue';
import BaseSectionTitle from '@/components/BaseSectionTitle.vue';
import BaseSectionBody from '@/components/BaseSectionBody.vue';

export default defineComponent({
  name: 'HomePage',
  components: {
    AppLayout,
    BaseSection,
    BaseSectionTitle,
    BaseSectionBody,
  },
});
</script>
