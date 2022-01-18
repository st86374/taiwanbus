import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'


// https://vitejs.dev/config/
export default defineConfig({
  base: '/taiwanbus/',
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
  // build: {
  //   minify: true,
  // },  

  // server: {
  //   host: true,
  //   port:8787
  // }
})