<template>
  <div class="bg-white">
    <div class="mx-auto py-12 px-4 max-w-7xl sm:px-6 lg:px-8 lg:py-24">
      <div class="space-y-12 lg:grid lg:grid-cols-3 lg:gap-8 lg:space-y-0">
        <div class="space-y-5 sm:space-y-4">
          <h2 class="text-3xl font-extrabold tracking-tight sm:text-4xl">
            Heiko Beineke
          </h2>
          <p class="text-xl text-gray-500">
            Nulla quam felis, enim faucibus proin velit, ornare id pretium.
            Augue ultrices sed arcu condimentum vestibulum suspendisse. Volutpat eu
            faucibus vivamus eget bibendum cras.
          </p>
        </div>
        <div class="lg:col-span-2">
          <ul
            class="space-y-12 sm:divide-y sm:divide-gray-200 sm:space-y-0
                   sm:-mt-8 lg:gap-x-8 lg:space-y-0"
          >
            <li
              v-for="trait in traits"
              :key="trait.id"
              class="sm:py-8"
            >
              <TraitMedia :trait="trait" />
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { defineComponent } from 'vue';
import TraitMedia from '@/components/TraitMedia.vue';

export default defineComponent({
  components: {
    TraitMedia,
  },
  props: {
    traits: {
      type: Array,
      required: true,
    },
  },
});
</script>
