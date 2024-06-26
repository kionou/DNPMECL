import './assets/main.css'
import './assets/page-profile.css'
import './assets/demo.css'
import './assets/core.css'
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import 'maplibre-gl/dist/maplibre-gl.css';
import 'bootstrap/dist/js/bootstrap.js';
import 'maz-ui/css/main.css'
import VueDatePicker from '@vuepic/vue-datepicker';
import '@vuepic/vue-datepicker/dist/main.css'
import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import { aliases, mdi } from 'vuetify/iconsets/mdi'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

import store from './store'


// import Chartkick from 'vue-chartkick';
// import Chart from 'chart.js';


import VueChartkick from 'vue-chartkick'
import 'chartkick/chart.js'
import MazBtn from 'maz-ui/components/MazBtn'
import MazInput from 'maz-ui/components/MazInput'
import MazPhoneNumberInput from 'maz-ui/components/MazPhoneNumberInput'
import MazSelect from 'maz-ui/components/MazSelect'
import MazAvatar from 'maz-ui/components/MazAvatar'
import MazTextarea from 'maz-ui/components/MazTextarea'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

const app = createApp(App)

const vuetify = createVuetify({
    components,
    directives,
    icons: {
      defaultSet: 'mdi',
      aliases,
      sets: {
        mdi,
      },
    },
  })

app.component('MazBtn', MazBtn)
app.component('MazInput', MazInput)
app.component('MazPhoneNumberInput', MazPhoneNumberInput)
app.component('MazSelect', MazSelect)
app.component('MazAvatar', MazAvatar)
app.component('MazTextarea', MazTextarea)
app.component('VueDatePicker', VueDatePicker);




store.dispatch('user/loadLoggedInUser').then(() => {
app.use(vuetify);
app.use(store);
app.use(VueChartkick)
app.use(router)
app.mount('#app')

});