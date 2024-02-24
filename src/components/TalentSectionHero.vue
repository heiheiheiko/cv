<template>
  <!-- eslint-disable max-len -->
  <div class="pt-10 bg-gray-900 sm:pt-16 lg:pt-8 lg:pb-14 lg:overflow-hidden">
    <div class="mx-auto max-w-7xl lg:px-8">
      <div class="lg:grid lg:grid-cols-2 lg:gap-8">
        <div
          class="mx-auto max-w-md px-4 sm:max-w-2xl sm:px-6 sm:text-center lg:px-0 lg:text-left lg:flex lg:items-center"
        >
          <div class="lg:py-24">
            <h1
              class="mt-4 text-4xl tracking-tight font-extrabold text-white sm:mt-5 sm:text-6xl lg:mt-6 xl:text-6xl"
            >
              <span
                class="pb-3 text-base font-semibold tracking-wider block bg-clip-text text-transparent bg-gradient-to-r from-teal-200 to-cyan-400 uppercase"
              >
                {{ translateI18nField(talent.positionI18n) }}
              </span>
              <span
                class="pb-3 block bg-clip-text text-transparent bg-gradient-to-r from-teal-200 to-cyan-400 sm:pb-5"
              >
                {{ talent.name }}
              </span>
            </h1>
            <p class="text-base text-gray-300 sm:text-xl lg:text-lg xl:text-xl">
              {{ translateI18nField(talent.sloganI18n) }}
            </p>
            <div class="mt-10 sm:mt-12 grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-3">
              <a
                v-for="link in links"
                :key="link.id"
                :href="link.url"
                target="_blank"
                class="block w-full py-3 px-4 rounded-md shadow bg-gradient-to-r from-teal-500 to-cyan-600 text-white font-medium hover:from-teal-600 hover:to-cyan-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cyan-400 focus:ring-offset-gray-900"
              >
                <FontAwesomeIcon :icon="['fab', link.icon]" size="lg" />
                <span class="ml-2"> {{ translateI18nField(link.titleI18n) }} </span>
              </a>
            </div>
          </div>
        </div>
        <div class="mt-12 -mb-16 sm:-mb-48 lg:m-0 lg:relative">
          <div class="mx-auto max-w-md px-4 sm:max-w-2xl sm:px-6 lg:max-w-none lg:px-0">
            <img
              class="w-full lg:absolute lg:inset-y-0 lg:left-0 lg:h-full lg:w-auto lg:max-w-none"
              :src="getHeroImageUrl()"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
/* eslint-disable import/no-dynamic-require */
/* eslint-disable global-require */
import { defineComponent } from 'vue'
import { translateI18nField } from '@/utils/i18nUtils'
import useLink from '@/composables/useLink'
import heroImageUrl from '@/assets/images/hero.svg'

export default defineComponent({
  props: {
    talent: {
      type: Object,
      required: true
    }
  },
  setup(props) {
    const { findLinks } = useLink()

    function getHeroImageUrl() {
      return heroImageUrl
    }

    const links = findLinks(props.talent.links)

    return {
      translateI18nField,
      links,
      getHeroImageUrl
    }
  }
})
</script>
