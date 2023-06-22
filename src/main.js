import './assets/main.css'
import 'bootstrap/dist/css/bootstrap.css';
import 'glightbox/dist/css/glightbox.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import 'bootstrap/dist/js/bootstrap.js';


import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import GLightbox from 'glightbox';

const app = createApp(App)
app.config.globalProperties.$glightbox = GLightbox;

app.use(router)

app.mount('#app')

