/*
 * @Author: yeyuhang
 * @Date: 2020-11-07 12:32:28
 * @LastEditTime: 2021-01-27 11:00:44
 * @LastEditors: Please set LastEditors
 * @Descripttion: 头部注释
 */
import Vue from 'vue'
import App from './App.vue'
// import VueRouter from 'vue-router'
import router from './router'
import { Quasar, QIcon } from 'quasar'
import iconSet from 'quasar/icon-set/fontawesome-v5'
import './components/useComponents'
import './assets/style/base.scss'
import './styles/quasar.sass'

Vue.config.productionTip = false
// Vue.prototype.$q = Quasar
// Vue.use(VueRouter)
Vue.use(Quasar, {
  components: {
    QIcon
  },
  iconSet: iconSet
})
new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
