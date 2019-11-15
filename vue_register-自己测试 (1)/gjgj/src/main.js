import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementUI from 'element-ui'; //ElementUI
import 'element-ui/lib/theme-chalk/index.css'; //ElementUI
import axios from 'axios' //引入axios

Vue.prototype.$axios = axios //引入axios

Vue.use(ElementUI); //全局运行//ElementUI

Vue.config.productionTip = false

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')