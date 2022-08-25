import { createApp } from 'vue'
import { createI18n } from 'vue-i18n'

import App from './App.vue'
import { messages } from './plugins/i18n.js'
import './assets/main.css'

const app = createApp(App)
const i18n = createI18n({
    locale: 'en',
    fallbackLocale: 'es',
    messages
})

app.use(i18n)
app.mount('#app')
