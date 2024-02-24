<template>
  <select
    id="location"
    v-model="$i18n.locale"
    name="location"
    class="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
  >
    <option v-for="locale in locales" :key="locale">
      {{ locale }}
    </option>
  </select>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  setup() {
    const locales = import.meta.env.VITE_APP_I18N_AVAILABLE_LOCALES.split(',')
    return { locales }
  }
})
</script>
