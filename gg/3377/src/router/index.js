import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import login from '../views/login.vue'
import homeindex from "@/components/homeindex.vue"
import userManagement from "@/components/userManagement.vue"
// import homemain from "@/components/homemain.vue"

Vue.use(VueRouter)

const routes = [
  {
        path: '/',
        name: 'login',
        component: login
    },
    {
      path: '/login',
      redirect: '/'
  },
  {
    path: '/home',
    name: 'home',
    component: Home,
    children: [{
          path: '/home',
          name: 'homeindex',
          component: homeindex
  },
  {
    path: '/home/userManagement',
    name: 'userManagement',
    component: userManagement
},
]
  },
 
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
