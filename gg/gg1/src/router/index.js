import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import login from '../views/login.vue'
import dataCount from '@/components/dataCount.vue'
import form from '@/components/form.vue'

Vue.use(VueRouter)

const routes = [{
    path: '/',
    name: 'login',
    component: login
  },
  {
    path: '/login',
    redirect: '/'
  },
  {
    path: '/Home',
    name: 'home',
    component: Home,
    children: [{
        path: '/',
        name: 'dataCount',
        component: dataCount
      },
      {
        path: '/home/form',
        name: 'form',
        component: form
      },
    ]
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router