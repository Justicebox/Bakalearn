import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import register from '../views/register.vue'
import centerindex from '@/components/centerindex.vue'
import centerdetails from '@/components/centerdetails.vue'
import detailscount from '@/components/detailscount.vue'
import detailsfore from '@/components/detailsfore.vue'
import detailsanalysis from '@/components/detailsanalysis.vue'
import detailsrelease from '@/components/detailsrelease.vue'
import centerproduct from '@/components/centerproduct.vue'
Vue.use(VueRouter)

const routes = [{
        path: '/',
        name: 'register',
        component: register
    },
    {
        path: '/Home',
        name: 'home',
        component: Home,
        children: [{
                path: '/',
                name: 'centerindex',
                component: centerindex
            },
            {
                path: '/Home/qcenter/centerdetails',
                name: 'centerdetails',
                component: centerdetails,
                children: [{
                        path: '/Home/qcenter/centerdetails/detailscount',
                        name: 'detailscount',
                        component: detailscount
                    },
                    {
                        path: '/Home/qcenter/centerdetails/detailsfore',
                        name: 'detailsfore',
                        component: detailsfore
                    },
                    {
                        path: '/Home/qcenter/centerdetails/detailsanalysis',
                        name: 'detailsanalysis',
                        component: detailsanalysis
                    },
                    {
                        path: '/Home/qcenter/centerdetails/detailsrelease',
                        name: 'detailsrelease',
                        component: detailsrelease
                    }
                ]
            },
            {
                path: '/Home/qcenter/centerproduct',
                name: 'centerproduct',
                component: centerproduct
            }
        ]
    },

    {
        path: '/register',
        // 重定向到默认路由 加载注册组件
        redirect: '/'
    },
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    linkActiveClass: "nav-active",
    routes
})

export default router
    ' '