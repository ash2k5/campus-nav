import { defineConfig } from 'vitest/config';

// Firestore rules tests run against the emulator, started by
// `firebase emulators:exec` (see the test:rules script). Kept separate
// from the default suite so `npm test` stays offline and fast.
export default defineConfig({
  test: {
    include: ['tests/rules/**/*.test.{js,mjs}'],
    environment: 'node',
    globals: true,
    testTimeout: 15000,
    hookTimeout: 30000,
    fileParallelism: false,
  },
});
