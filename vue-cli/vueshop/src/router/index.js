import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import login from '../views/login.vue'
import homeindex from "@/components/homeindex.vue"
import userManagement from "@/components/userManagement.vue"
import dataCount from "@/components/dataCount.vue"
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
        path: '/home',
        name: 'home',
        component: Home,
        children: [{
                path: '/',
                name: 'homeindex',
                component: homeindex
            },
            {
                path: '/home/userManagement',
                name: 'userManagement',
                component: userManagement
            },
            {
                path: '/home/dataCount',
                name: 'dataCount',
                component: dataCount
            }
        ]
    },

]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router