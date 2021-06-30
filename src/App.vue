<template>
  <router-view />
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import useState from '@/composables/useState';

export default defineComponent({
  name: 'App',
  components: {
  },
  setup() {
    const { computedState } = useState();

    return {
      computedState,
    };
  },
});
</script>
