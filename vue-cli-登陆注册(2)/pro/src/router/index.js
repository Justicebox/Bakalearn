import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import register from '../views/register.vue'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'register',
    component: register
  },
  {
    path: '/Home',
    name: 'home',
    component: Home
  },
  
  {
    path: '/register',
    name: 'register',
    component: register
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
