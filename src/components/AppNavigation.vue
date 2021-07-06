<template>
  <Popover
    open="true"
    class="relative bg-white"
  >
    <div class="max-w-7xl mx-auto px-4 sm:px-6">
      <div
        class="flex justify-between items-center border-b-2 border-gray-100
                  py-6 md:justify-start md:space-x-10"
      >
        <div class="flex justify-start lg:w-0 lg:flex-1">
          <a href="#">
            <span class="sr-only">Workflow</span>
            <img
              class="h-8 w-auto sm:h-10"
              src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg"
              alt=""
            >
          </a>
        </div>
        <div class="-mr-2 -my-2 md:hidden">
          <PopoverButton
            class="bg-white rounded-md p-2 inline-flex items-center
                   justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100
                   focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
          >
            <span class="sr-only">Open menu</span>
            <MenuIcon
              class="h-6 w-6"
              aria-hidden="true"
            />
          </PopoverButton>
        </div>
        <PopoverGroup
          as="nav"
          class="hidden md:flex space-x-10"
        >
          <a
            v-for="object in navigation"
            :key="object.name"
            href="#"
            class="text-base font-medium text-gray-500 hover:text-gray-900"
          >
            {{ object.name }}
          </a>
        </PopoverGroup>

        <div class="hidden md:flex items-center justify-end md:flex-1 lg:w-0">
          <!-- social media ?! -->
        </div>
      </div>
    </div>

    <transition
      enter-active-class="duration-200 ease-out"
      enter-from-class="opacity-0 scale-95"
      enter-to-class="opacity-100 scale-100"
      leave-active-class="duration-100 ease-in"
      leave-from-class="opacity-100 scale-100"
      leave-to-class="opacity-0 scale-95"
    >
      <PopoverPanel
        focus
        class="absolute top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden"
      >
        <div
          class="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5
                  bg-white divide-y-2 divide-gray-50"
        >
          <div class="pt-5 pb-6 px-5">
            <div class="flex items-center justify-between">
              <div>
                <img
                  class="h-8 w-auto"
                  src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg"
                  alt="Workflow"
                >
              </div>
              <div class="-mr-2">
                <PopoverButton
                  class="bg-white rounded-md p-2 inline-flex items-center justify-center
                         text-gray-400 hover:text-gray-500 hover:bg-gray-100
                         focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
                >
                  <span class="sr-only">Close menu</span>
                  <XIcon
                    class="h-6 w-6"
                    aria-hidden="true"
                  />
                </PopoverButton>
              </div>
            </div>
            <div class="mt-6">
              <nav class="grid gap-y-8">
                <a
                  v-for="object in navigation"
                  :key="object.name"
                  href="#"
                  class="-m-3 p-3 flex items-center rounded-md hover:bg-gray-50"
                >
                  <SupportIcon
                    class="flex-shrink-0 h-6 w-6 text-indigo-600"
                    aria-hidden="true"
                  />
                  <span class="ml-3 text-base font-medium text-gray-900">
                    {{ object.name }}
                  </span>
                </a>
              </nav>
            </div>
          </div>
        </div>
      </PopoverPanel>
    </transition>
  </Popover>
</template>

<script>
import { defineComponent } from 'vue';
import {
  Popover, PopoverButton, PopoverGroup, PopoverPanel,
} from '@headlessui/vue';
import {
  MenuIcon,
  SupportIcon,
  XIcon,
} from '@heroicons/vue/outline';
import { useI18n } from 'vue-i18n';

export default defineComponent({
  components: {
    Popover,
    PopoverButton,
    PopoverGroup,
    PopoverPanel,
    MenuIcon,
    SupportIcon,
    XIcon,
  },
  setup() {
    const { t } = useI18n({
      inheritLocale: true,
      useScope: 'local',
    });

    const navigation = [
      { name: t('dashboard'), href: '#', isActive: true },
      { name: t('team'), href: '#', isActive: false },
      { name: t('projects'), href: '#', isActive: false },
    ];

    return {
      navigation,
      t,
    };
  },
});
</script>

<i18n>
{
  "en": {
      "dashboard": "Dashboard",
      "team": "Team",
      "projects": "Projects",
  },
  "de": {
      "dashboard": "Dashboard",
      "team": "Team",
      "projects": "Projekte",
  }
}
</i18n>
