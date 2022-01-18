import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'


// https://vitejs.dev/config/
export default defineConfig({
  base: process.env.NODE_ENV === 'production' ? '/taiwanbus/' : './',
  plugins: [vue()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, '/src'),
    },
  },
  build: {
    minify: true,
  },  
  define:{
    'process.env':{
      VUE_APP_GOOGLE_MAP_API_KEY:'AIzaSyAFKPiMUc5jyVnzoWAJush-EDagXdyHgVc',
    }
  },
  // server: {
  //   host: true,
  //   port:8787
  // }
})