import './style.css'
import { createApp } from 'vue'
import router from '@/router'
import { createPinia } from 'pinia'

// Vuetify

import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

// Components
import App from './App.vue'

const vuetify = createVuetify({
    components,
    directives,
})
const pinia = createPinia()

createApp(App).use(vuetify).use(router).use(pinia).mount('#app')
