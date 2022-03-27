import { defineConfig } from 'windicss/helpers'
import formsPlugin from 'windicss/plugin/forms'

export default defineConfig({
    extract: {
        include: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
    },
    attributify: true,
    plugins: [formsPlugin],
})
