import { createRouter, createWebHistory } from 'vue-router'

import IndexPage from '@/pages/IndexPage.vue'
import MyBankPage from '@/pages/MyBankPage.vue'
import TransfersPage from '@/pages/TransfersPage.vue'
import MenuPage from '@/pages/MenuPage.vue'

const routes = [
  {
    path: '/',
    component: IndexPage,
  },
  {
    path: '/my-bank',
    component: MyBankPage,
  },
  {
    path: '/transfer',
    component: TransfersPage,
  },
  {
    path: '/menu',
    component: MenuPage,
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
