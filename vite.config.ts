import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { join } from "path";

const {resolve} = require('path')

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      '@': join(__dirname, "src"),
    }
  }
})
