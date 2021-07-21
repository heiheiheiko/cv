<template>
  <SwitchGroup
    as="div"
    class="flex items-center"
  >
    <Switch
      :model-value="isActive"
      :class="[isActive ? 'bg-indigo-600' : 'bg-gray-200', `relative inline-flex
      flex-shrink-0 h-6 w-11 border-2 border-transparent rounded-full cursor-pointer
      transition-colors ease-in-out duration-200 focus:outline-none focus:ring-2
      focus:ring-offset-2 focus:ring-indigo-500`]"
      @update:modelValue="$emit('update')"
    >
      <span
        aria-hidden="true"
        :class="[isActive ? 'translate-x-5' : 'translate-x-0', `pointer-events-none
        inline-block h-5 w-5 rounded-full bg-white shadow transform ring-0 transition
        ease-in-out duration-200`]"
      />
    </Switch>
    <SwitchLabel
      as="span"
      class="ml-3"
    >
      <span class="text-sm font-medium text-gray-900">
        <slot />
      </span>
    </SwitchLabel>
  </SwitchGroup>
</template>

<script>
import { defineComponent } from 'vue';

import { Switch, SwitchGroup, SwitchLabel } from '@headlessui/vue';

export default defineComponent({
  components: {
    Switch,
    SwitchGroup,
    SwitchLabel,
  },
  props: {
    isActive: {
      type: Boolean,
      required: true,
    },
  },
  emits: ['update'],
});
</script>
