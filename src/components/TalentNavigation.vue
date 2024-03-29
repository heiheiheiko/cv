<template>
  <Popover as="header" class="relative">
    <div class="bg-gray-900 pt-6">
      <nav
        class="relative max-w-7xl mx-auto flex items-center justify-between px-4 sm:px-6"
        aria-label="Global"
      >
        <div class="flex items-center flex-1">
          <div class="flex items-center justify-between w-full md:w-auto">
            <div class="text-white hover:text-gray-300">
              <span class="sr-only">logo</span>

              <FontAwesomeIcon icon="user-astronaut" size="2x" />
            </div>
            <div class="-mr-2 flex items-center md:hidden">
              <PopoverButton
                class="bg-gray-900 rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:bg-gray-800 focus:outline-none focus:ring-2 focus-ring-inset focus:ring-white"
              >
                <span class="sr-only">Open main menu</span>
                <Bars3Icon class="h-6 w-6" aria-hidden="true" />
              </PopoverButton>
            </div>
          </div>
          <div class="hidden space-x-8 md:flex md:ml-10">
            <a
              v-for="item in navigation"
              :key="item.name"
              :href="item.href"
              class="text-base font-medium text-white hover:text-gray-300"
              >{{ item.name }}</a
            >
          </div>
        </div>
        <div class="hidden md:flex md:items-center md:space-x-6">
          <TheLocaleSelect />
        </div>
      </nav>
    </div>

    <transition
      enter-active-class="duration-150 ease-out"
      enter-from-class="opacity-0 scale-95"
      enter-to-class="opacity-100 scale-100"
      leave-active-class="duration-100 ease-in"
      leave-from-class="opacity-100 scale-100"
      leave-to-class="opacity-0 scale-95"
    >
      <PopoverPanel
        focus
        class="absolute top-0 inset-x-0 p-2 transition transform origin-top md:hidden"
      >
        <div class="rounded-lg shadow-md bg-white ring-1 ring-black ring-opacity-5 overflow-hidden">
          <div class="px-5 pt-4 flex items-center justify-between">
            <div>
              <FontAwesomeIcon icon="user-astronaut" size="2x" />
            </div>
            <div class="-mr-2">
              <PopoverButton
                class="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-cyan-600"
              >
                <span class="sr-only">Close menu</span>
                <XMarkIcon class="h-6 w-6" aria-hidden="true" />
              </PopoverButton>
            </div>
          </div>
          <div class="pt-5 pb-6">
            <div class="px-2 space-y-1">
              <a
                v-for="item in navigation"
                :key="item.name"
                :href="item.href"
                class="block px-3 py-2 rounded-md text-base font-medium text-gray-900 hover:bg-gray-50"
                >{{ item.name }}</a
              >
            </div>
            <div class="mt-6 px-5">
              <TheLocaleSelect />
            </div>
          </div>
        </div>
      </PopoverPanel>
    </transition>
  </Popover>
</template>

<script>
import { defineComponent, computed } from 'vue'
import { Popover, PopoverButton, PopoverPanel } from '@headlessui/vue'
import { Bars3Icon, XMarkIcon } from '@heroicons/vue/20/solid'
import { useI18n } from 'vue-i18n'
import TheLocaleSelect from '@/components/TheLocaleSelect.vue'

export default defineComponent({
  components: {
    Popover,
    PopoverButton,
    PopoverPanel,
    Bars3Icon,
    XMarkIcon,
    TheLocaleSelect
  },
  setup() {
    const { t } = useI18n()

    const navigation = computed(() => {
      return  [
        { name: t('resources.feature.name', 2), href: '#features-section', isActive: true },
        { name: t('resources.stage.name', 2), href: '#stages-section', isActive: false },
        { name: t('resources.skill.name', 2), href: '#skills-section', isActive: false },
        { name: t('resources.interest.name', 2), href: '#interests-section', isActive: false }
      ]
    })

    return { navigation }
  }
})
</script>
