import react from '@vitejs/plugin-react'
import Unocss from 'unocss/vite'
import { defineConfig } from 'vite'

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [react(), Unocss()],
    build: {
        sourcemap: true,
    },
    server: {
        open: true,
        host: true,
    },
})
