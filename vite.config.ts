import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

export default defineConfig({
  plugins: [react()],
  base: '/', // ✅ For tejastarte001.github.io root domain
  css: {
    postcss: './postcss.config.cjs',
  },
})
