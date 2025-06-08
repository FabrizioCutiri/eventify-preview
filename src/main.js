import { createApp } from 'vue'
import './style.css'
import App from './App.vue'

import Primevue from 'primevue/config'
import Material from '@primeuix/themes/material'
import 'primeicons/primeicons.css'
import 'primeflex/primeflex.css'
import i18n from "./i18n/index.js";
import {Avatar, SelectButton, Toolbar} from "primevue";
import router from './router/index.js'

const app = createApp(App);

app
    .use(Primevue,{theme:{preset:Material},ripple:true})
    .use(i18n)
    .use(router)
    .component('pv-select-button',SelectButton)
    .component('pv-toolbar',Toolbar)
    .component('pv-avatar',Avatar)
    .mount('#app')

