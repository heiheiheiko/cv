<template>
  <footer>
    <div
      class="max-w-7xl mx-auto py-12 px-4 sm:px-6 md:flex md:items-center md:justify-between lg:px-8 border-t border-gray-200"
    >
      <div class="flex justify-center space-x-6 md:order-2">
        <a
          v-for="link in links"
          :key="link.icon"
          :href="link.url"
          target="_blank"
          class="text-gray-400 hover:text-gray-500"
        >
          <span class="sr-only">{{ translateI18nField(link.titleI18n) }}</span>
          <FontAwesomeIcon :icon="['fab', link.icon]" size="lg" fixed-width aria-hidden="true" />
        </a>
      </div>
      <div class="mt-8 md:mt-0 md:order-1">
        <router-link
          :to="{ name: 'DataProtectionPage' }"
          class="text-base text-gray-500 hover:text-gray-600"
        >
          {{ t('dataProtection') }}
        </router-link>
      </div>
    </div>
  </footer>
</template>

<script>
import { defineComponent } from 'vue'
import useLink from '@/composables/useLink'
import { translateI18nField } from '@/utils/i18nUtils'
import { useI18n } from 'vue-i18n'

export default defineComponent({
  props: {
    talent: {
      type: Object,
      required: true
    }
  },
  setup(props) {
    const { t } = useI18n({
      inheritLocale: true,
      useScope: 'local'
    })

    const { findLinks } = useLink()

    const links = findLinks(props.talent.links)

    return {
      links,
      translateI18nField,
      t
    }
  }
})
</script>

<i18n>
{
  "de": {
      "dataProtection": "Datenschutz",
  },
  "en": {
      "dataProtection": "Data protection",
  }
}
</i18n>
