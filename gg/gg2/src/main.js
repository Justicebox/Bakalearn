import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

// 引入echarts
import echarts from 'echarts'
// 将echarts注册到Vue组件的原型对象中去
Vue.prototype.$echarts = echarts
    // 引入axios
import axios from 'axios'
// 将axios注册到Vue组件的原型对象中去
Vue.prototype.$axios = axios
Vue.use(ElementUI)


Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
