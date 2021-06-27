<!-- This example requires Tailwind CSS v2.0+ -->
<template>
  <div class="min-h-screen bg-white">
    <AppNavigation />

    <div class="py-10">
      <header>
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 class="text-3xl font-bold leading-tight text-gray-900">
            Dashboard
          </h1>
        </div>
      </header>

      <main>
        <div class="max-w-7xl mx-auto sm:px-6 lg:px-8">
          <!-- Replace with your content -->
          <div class="px-4 py-8 sm:px-0">
            <div class="border-4 border-dashed border-gray-200 rounded-lg h-96" />
          </div>
          <!-- /End replace -->
        </div>
      </main>
    </div>
  </div>
</template>

<script>
import { defineComponent } from 'vue';
import AppNavigation from '@/components/AppNavigation.vue';

export default defineComponent({
  components: {
    AppNavigation,
  },
});
</script>
