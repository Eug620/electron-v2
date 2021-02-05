/* 
 * @Author       : Eug
 * @Date         : 2021-01-27 10:58:37
 * @LastEditTime : 2021-02-04 14:49:20
 * @LastEditors  : Eug
 * @Descripttion : Descripttion
 * @FilePath     : /electron-v2/src/components/useComponents.js
 */

import Vue from 'vue'

import EugHeader from './eug-header'
import EugCity from './eug-city'
import EugEditor from './eug-editor'

Vue.component('eug-header', EugHeader)
Vue.component('eug-city', EugCity)
Vue.component('eug-editor', EugEditor)