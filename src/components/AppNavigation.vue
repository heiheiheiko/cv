<!-- This example requires Tailwind CSS v2.0+ -->
<template>
  <Disclosure
    v-slot="{ isOpen }"
    as="nav"
    class="bg-white border-b border-gray-200"
  >
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex justify-between h-16">
        <div class="flex">
          <div class="flex-shrink-0 flex items-center">
            <img
              class="block lg:hidden h-8 w-auto"
              src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg"
              alt="Workflow"
            >
            <img
              class="hidden lg:block h-8 w-auto"
              src="https://tailwindui.com/img/logos/workflow-logo-indigo-600-mark-gray-800-text.svg"
              alt="Workflow"
            >
          </div>
          <div class="hidden sm:-my-px sm:ml-6 sm:flex sm:space-x-8">
            <AppNavigationLink
              v-for="object in navigation"
              :key="object.name"
              :navigation-object="object"
            />
          </div>
        </div>
        <div class="hidden sm:ml-6 sm:flex sm:items-center">
          <button
            class="bg-white p-1 rounded-full text-gray-400 hover:text-gray-500
            focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            <span class="sr-only">View notifications</span>
            <BellIcon
              class="h-6 w-6"
              aria-hidden="true"
            />
          </button>
        </div>
        <div class="-mr-2 flex items-center sm:hidden">
          <!-- Mobile menu button -->
          <DisclosureButton
            class="bg-white inline-flex items-center justify-center p-2
            rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none
            focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            <span class="sr-only">isOpen main menu</span>
            <MenuIcon
              v-if="!isOpen"
              class="block h-6 w-6"
              aria-hidden="true"
            />
            <XIcon
              v-else
              class="block h-6 w-6"
              aria-hidden="true"
            />
          </DisclosureButton>
        </div>
      </div>
    </div>

    <DisclosurePanel class="sm:hidden">
      <div class="pt-2 pb-3 space-y-1">
        <AppNavigationLinkMobile
          v-for="object in navigation"
          :key="object.name"
          :navigation-object="object"
        />
      </div>
    </DisclosurePanel>
  </Disclosure>
</template>

<script>
import { defineComponent, ref } from 'vue';

import {
  Disclosure, DisclosureButton, DisclosurePanel,
} from '@headlessui/vue';
import { BellIcon, MenuIcon, XIcon } from '@heroicons/vue/outline';
import { useI18n } from 'vue-i18n';
import AppNavigationLink from '@/components/AppNavigationLink.vue';
import AppNavigationLinkMobile from '@/components/AppNavigationLinkMobile.vue';

export default defineComponent({
  components: {
    Disclosure,
    DisclosureButton,
    DisclosurePanel,
    BellIcon,
    MenuIcon,
    XIcon,
    AppNavigationLink,
    AppNavigationLinkMobile,
  },
  setup() {
    const isOpen = ref(false);

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
      isOpen,
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
