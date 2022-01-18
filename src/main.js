import { createApp } from 'vue'
import App from './App.vue'
import router from './router/index.js'
import store from './store/index.js'
import './assets/css/tailwind.css';
import './assets/css/main.scss';
createApp(App).use(router).use(store).mount('#app')