<template>
  <div class="pb-16 bg-gradient-to-r from-teal-500 to-cyan-600 lg:pb-0 lg:z-4 lg:relative">
    <div class="lg:mx-auto lg:max-w-7xl lg:px-8 lg:grid lg:grid-cols-3 lg:gap-8">
      <div class="relative lg:-my-8">
        <div
          aria-hidden="true"
          class="absolute inset-x-0 top-0 h-1/2 bg-white lg:hidden"
        />
        <div class="mx-auto max-w-md px-4 sm:max-w-3xl sm:px-6 lg:p-0 lg:h-full">
          <div
            class="aspect-w-10 aspect-h-6 rounded-xl shadow-xl overflow-hidden
                   sm:aspect-w-16 sm:aspect-h-7 lg:aspect-none lg:h-full"
          >
            <div
              class="object-cover lg:h-full lg:w-full bg-gradient-to-l from-teal-500 to-cyan-600
                     flex items-center justify-center"
            >
              <FontAwesomeIcon
                :icon="testimonial.icon"
                class="text-white"
                size="10x"
              />
            </div>
            <!-- <img
              class="object-cover lg:h-full lg:w-full"
              src="https://via.placeholder.com/2100x1400/14b8a6/FFFFFF?Text=Down.com"
              alt=""
            > -->
            <!-- <img
              class="object-cover lg:h-full lg:w-full"
              :src="getImgUrl('accomplisher_430x700.jpg')"
            > -->
          </div>
        </div>
      </div>
      <div class="mt-12 lg:m-0 lg:col-span-2 lg:pl-8">
        <div class="mx-auto max-w-md px-4 sm:max-w-2xl sm:px-6 lg:px-0 lg:py-20 lg:max-w-none">
          <blockquote>
            <div>
              <svg
                class="h-12 w-12 text-white opacity-25"
                fill="currentColor"
                viewBox="0 0 32 32"
                aria-hidden="true"
              >
                <path
                  d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36
                     0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576
                     0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512
                     0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264
                     0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576
                     0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z"
                />
              </svg>
              <p class="mt-6 text-2xl font-medium text-white">
                {{ translateI18nField(testimonial.quoteI18n) }}
              </p>
            </div>
            <footer class="mt-6">
              <p class="text-lg font-medium text-white">
                {{ testimonial.quotedPerson }}
              </p>
            </footer>
          </blockquote>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
/* eslint-disable import/no-dynamic-require */
/* eslint-disable global-require */

import { defineComponent } from 'vue';
import { translateI18nField } from '@/utils/i18nUtils';

// function getImgUrl(image:string) {
//   return require(`../assets/images/${image}`);
// }

export default defineComponent({
  props: {
    testimonial: {
      type: Object,
      required: true,
    },
  },
  setup() {
    return {
      // getImgUrl,
      translateI18nField,
    };
  },
});
</script>
