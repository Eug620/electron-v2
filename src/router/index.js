/*
 * @Author        : yeyuhang
 * @Date          : Do not edit
 * @LastEditTime: 2021-01-27 11:30:43
 * @LastEditors: Please set LastEditors
 * @Descripttion  : Descripttion
 */
import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'login',
    component: () => import('@/views/login/index.vue')
  },{
    path: '/home',
    name: 'home',
    component: () => import('@/views/home/index.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
