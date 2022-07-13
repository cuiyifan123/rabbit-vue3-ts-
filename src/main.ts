import { createApp } from 'vue'
import App from './App.vue'
import { createPinia } from 'pinia'
import { router } from '@/router'
// 全局组件
import Component from '@/components'
// 全局指令
import Directives from '@/directives'
import '@/assets/styles/index.less'
// 重置样式文件
import 'normalize.css'
// 公共的样式
import '@/assets/styles/common.less'

import 'animate.css'

const app = createApp(App)
const piain = createPinia()
// registerComponent(app)
// 注册全局组件

app.use(Component).use(Directives).use(piain).use(router).mount('#app')
