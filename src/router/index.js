/*
 * @Author        : yeyuhang
 * @Date          : Do not edit
 * @LastEditTime: 2021-01-26 14:43:22
 * @LastEditors: Please set LastEditors
 * @Descripttion  : Descripttion
 */
import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import('@/components/HelloWorld.vue')
  },
]

const router = new VueRouter({
  routes
})

export default router
