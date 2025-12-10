import { defineConfig } from 'eslint/config'
import tsPrefixer from 'eslint-config-ts-prefixer'
import reactHooks from 'eslint-plugin-react-hooks'

export default defineConfig([
  {
    ignores: [
      '**/.vscode',
      '**/node_modules',
      '**/build',
      '**/dist',
      '**/.github',
      '**/.idea',
      'public/mockServiceWorker.js',
    ],
  },
  {
    plugins: {
      'react-hooks': reactHooks,
    },

    rules: {
      'react-hooks/rules-of-hooks': 'error',
      'react-hooks/exhaustive-deps': 'warn',
    },
  },
  ...tsPrefixer,
])
