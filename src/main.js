/*
 * @Author: yeyuhang
 * @Date: 2020-11-07 12:32:28
 * @LastEditTime: 2020-11-13 19:53:40
 * @LastEditors: yeyuhang
 * @Descripttion: 头部注释
 */
import Vue from 'vue'
import App from './App.vue'
import { Quasar, QIcon } from 'quasar'
import './assets/style/base.scss'
import './styles/quasar.sass'

Vue.config.productionTip = false
// Vue.prototype.$q = Quasar
Vue.use(Quasar, {
  components: {
    QIcon
  }
})
new Vue({
  render: h => h(App),
}).$mount('#app')
