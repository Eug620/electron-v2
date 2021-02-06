/* 
 * @Author       : Eug
 * @Date         : 2021-01-27 10:58:37
 * @LastEditTime : 2021-02-05 10:43:59
 * @LastEditors  : Eug
 * @Descripttion : Descripttion
 * @FilePath     : /electron-v2/src/components/useComponents.js
 */

import Vue from 'vue'

import EugHeader from './eug-header'
import EugCity from './eug-city'
import EugEditor from './eug-editor'
import EugCarousel from './eug-carousel'

Vue.component('eug-header', EugHeader)
Vue.component('eug-city', EugCity)
Vue.component('eug-editor', EugEditor)
Vue.component('eug-carousel', EugCarousel)