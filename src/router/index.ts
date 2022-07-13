import type { App } from 'vue'
import { createRouter, createWebHashHistory } from 'vue-router'
import type { RouteRecordRaw } from 'vue-router'
import Layout from '@/layout/index.vue'

const constRouter: RouteRecordRaw[] = [
  {
    path: '/',
    component: Layout,
    children: [
      {
        path: '',
        component: () => import('@/views/home/index.vue')
      },
      {
        path: 'category/:id',
        component: () => import('@/views/category/index.vue')
      },
      {
        path: 'category/sub/:id',
        component: () => import('@/views/category/sub.vue')
      },
      {
        path: 'goods/:id',
        component: () => import('@/views/goods/index.vue')
      }
    ]
  },
  {
    path: '/login',
    component: () => import('@/views/login/index.vue')
  }
]
export const router = createRouter({
  routes: [...constRouter],
  history: createWebHashHistory(),
  scrollBehavior() {
    return { top: 0 }
  }
})
