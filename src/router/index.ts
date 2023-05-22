import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'

import Layout from '@/layout/index.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    component: Layout,
    redirect: '/welcome',
    children: []
  },
  {
    path: '/welcome',
    name: 'Welcome',
    redirect: '/welcome/index',
    component: Layout,
    meta: {
      title: '欢迎页面',
      icon: '',
      hidden: true
    },
    children: [
      {
        path: 'index',
        name: 'WelcomeIndex',
        component: () => import('@/views/demo/index.vue')
      }
    ]
  }
]

export const router = createRouter({
  linkActiveClass: 'menu-active',
  history: createWebHashHistory(),
  routes: routes
})

export default router
