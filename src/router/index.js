/* 
 * @Author       : Eug
 * @Date         : 2020-11-13 18:39:48
 * @LastEditTime : 2021-02-04 12:26:58
 * @LastEditors  : Eug
 * @Descripttion : Descripttion
 * @FilePath     : /electron-v2/src/router/index.js
 */
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
  },
  {
    path: '/test',
    name: 'test',
    component: () => import('@/views/test/index.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
