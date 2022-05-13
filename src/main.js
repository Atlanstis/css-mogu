import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
// 样式
import 'normalize.css/normalize.css'
import '@/styles/index.scss'
// 公共组件
import Mui from '@/components'
// Mock
import '@/mock'
// 响应式
import 'lib-flexible/flexible'

createApp(App).use(store).use(router).use(Mui).mount('#app')
