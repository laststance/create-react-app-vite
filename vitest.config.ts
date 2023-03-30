import { defineConfig } from 'vitest/config'

export default defineConfig({
  test: {
    dangerouslyIgnoreUnhandledErrors: true,
    environment: 'happy-dom',
    globals: true,
    setupFiles: ['./setupTests.ts'],
  },
})
