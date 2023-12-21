import { defineConfig } from 'vitest/config';

// noinspection JSUnusedGlobalSymbols
export default defineConfig({
  root: '.',
  test: {
    clearMocks: true,
    globals: true,
    setupFiles: ['test/setup'] //this line,
  }
});
