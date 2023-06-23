import './assets/main.css'
import './assets/page-profile.css'
import './assets/demo.css'
import './assets/core.css'
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import 'bootstrap/dist/js/bootstrap.js';


import { createApp } from 'vue'
import App from './App.vue'
import router from './router'


const app = createApp(App)


app.use(router)

app.mount('#app')

