import { createApp } from 'vue'
import ElementPlus from 'element-plus'
import './assets/element-variables.scss'
import App from './App.vue'
import router from './router'

createApp(App).use(router).use(ElementPlus).mount('#root')
