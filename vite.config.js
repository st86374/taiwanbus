import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, '/src'),
    },
  },
  define:{
    'process.env':{
      VUE_APP_GOOGLE_MAP_API_KEY:'AIzaSyAFKPiMUc5jyVnzoWAJush-EDagXdyHgVc',
    }
  },    
  // base:'/taiwanbus/',
  build: {
    minify: true,
    rollupOptions: {
      input: {
        main: path.resolve(__dirname, 'index.html'),
        // nested: path.resolve(__dirname, 'nested/index.html')
      }
    }
  }
  // server: {
  //   host: true,
  //   port:8787
  // }
})