module.exports = {
  preset: '@vue/cli-plugin-unit-jest/presets/typescript-and-babel',
  transform: {
    '^.+\\.vue$': 'vue-jest',
  },
  collectCoverageFrom: [
    'src/components/**/*.{vue, ts}',
    'src/composables/**/*.{ts, js}',
    'src/decorators/**/*.{ts, js}',
    'src/services/**/*.{ts, js}',
    'src/utils/**/*.{ts, js}',
  ],
};
