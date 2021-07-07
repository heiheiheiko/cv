<template>
  <div>
    <span
      class="inline-flex items-center justify-center p-3 bg-gradient-to-r
           from-teal-500 to-cyan-600 rounded-md shadow-lg"
    >
      <HeroIcon
        :icon="icon"
        class="h-6 w-6 text-white"
        aria-hidden="true"
      />
    </span>
  </div>
</template>

<script>
import { defineComponent } from 'vue';
import HeroIcon from '@/components/HeroIcon.vue';

export default defineComponent({
  components: {
    HeroIcon,
  },
  props: {
    icon: {
      type: Function,
      required: true,
    },
  },
});
</script>
