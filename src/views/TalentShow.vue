<template>
  <TalentLayout :talent="talent" />
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue';
import { useRoute } from 'vue-router';
import TalentLayout from '@/components/TalentLayout.vue';
import useTalent from '@/composables/useTalent';

export default defineComponent({
  name: 'HomePage',
  components: {
    TalentLayout,
  },
  setup() {
    const route = useRoute();
    const { findTalentBySlug, fetchTalents } = useTalent();

    const talentSlug = route.params.slug as string;
    const talent = computed(() => findTalentBySlug(talentSlug));

    return {
      fetchTalents, talent,
    };
  },
  created() {
    this.fetchTalents();
  },
});
</script>
