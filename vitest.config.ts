import EnvironmentPlugin from 'vite-plugin-environment'
import { defineConfig } from 'vitest/config'
export default defineConfig({
  plugins: [EnvironmentPlugin(['REACT_APP_TEXT'])],
  test: {
    dangerouslyIgnoreUnhandledErrors: true,
    environment: 'happy-dom',
    globals: true,
    setupFiles: ['./setupTests.ts'],
  },
})
