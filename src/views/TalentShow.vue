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
    const { findTalent, fetchTalents } = useTalent();

    const talentId = parseInt(route.params.id as string, 10);
    const talent = computed(() => findTalent(talentId));

    return {
      findTalent, fetchTalents, talent,
    };
  },
  created() {
    this.fetchTalents();
  },
});
</script>
