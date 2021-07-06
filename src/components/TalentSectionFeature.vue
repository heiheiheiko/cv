<template>
  <div class="relative bg-white py-16 sm:py-24 lg:py-32">
    <div class="mx-auto max-w-md px-4 text-center sm:max-w-3xl sm:px-6 lg:px-8 lg:max-w-7xl">
      <BaseSectionHeaderTitle>
        Deploy faster
      </BaseSectionHeaderTitle>
      <BaseSectionHeaderSubtitle>
        Everything you need to deploy your app
      </BaseSectionHeaderSubtitle>
      <BaseSectionHeaderDescription>
        Phasellus lorem quam molestie id quisque diam aenean nulla in.
        Accumsan in quis quis nunc, ullamcorper malesuada. Eleifend condimentum id viverra nulla.
      </BaseSectionHeaderDescription>

      <div class="mt-12">
        <div class="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          <BaseCardFeature
            v-for="feature in features"
            :key="feature.name"
          >
            <BaseCardFeatureIcon :icon="feature.icon" />
            <BaseCardFeatureTitle>
              {{ feature.name }}
            </BaseCardFeatureTitle>
            <BaseCardFeatureDescription>
              {{ feature.description }}
            </BaseCardFeatureDescription>
          </BaseCardFeature>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { defineComponent } from 'vue';

import {
  CloudUploadIcon,
  LockClosedIcon,
  RefreshIcon,
  ShieldCheckIcon,
  ServerIcon,
  CogIcon,
} from '@heroicons/vue/solid';
import BaseSectionHeaderTitle from '@/components/BaseSectionHeaderTitle.vue';
import BaseSectionHeaderSubtitle from '@/components/BaseSectionHeaderSubtitle.vue';
import BaseSectionHeaderDescription from '@/components/BaseSectionHeaderDescription.vue';
import BaseCardFeature from '@/components/BaseCardFeature.vue';
import BaseCardFeatureTitle from '@/components/BaseCardFeatureTitle.vue';
import BaseCardFeatureDescription from '@/components/BaseCardFeatureDescription.vue';
import BaseCardFeatureIcon from '@/components/BaseCardFeatureIcon.vue';

const features = [
  {
    name: 'Push to Deploy',
    description: 'Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et magna sit morbi vitae lobortis.',
    icon: CloudUploadIcon,
  },
  {
    name: 'SSL Certificates',
    description: 'Qui aut temporibus nesciunt vitae dicta repellat sit dolores pariatur. Temporibus qui illum aut.',
    icon: LockClosedIcon,
  },
  {
    name: 'Simple Queues',
    description: 'Rerum quas incidunt deleniti quaerat suscipit mollitia. Amet repellendus ut odit dolores qui.',
    icon: RefreshIcon,
  },
  {
    name: 'Advanced Security',
    description: 'Ullam laboriosam est voluptatem maxime ut mollitia commodi. Et dignissimos suscipit perspiciatis.',
    icon: ShieldCheckIcon,
  },
  {
    name: 'Powerful API',
    description:
      'Ab a facere voluptatem in quia corrupti veritatis aliquam. Veritatis labore quaerat ipsum quaerat id.',
    icon: CogIcon,
  },
  {
    name: 'Database Backups',
    description: 'Quia qui et est officia cupiditate qui consectetur. Ratione similique et impedit ea ipsum et.',
    icon: ServerIcon,
  },
];

export default defineComponent({
  components: {
    BaseSectionHeaderTitle,
    BaseSectionHeaderSubtitle,
    BaseSectionHeaderDescription,
    BaseCardFeature,
    BaseCardFeatureIcon,
    BaseCardFeatureTitle,
    BaseCardFeatureDescription,
  },
  setup() {
    return {
      features,
    };
  },
});
</script>
