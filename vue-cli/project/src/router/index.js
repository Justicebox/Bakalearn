import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import register from "../views/register.vue";
Vue.use(VueRouter);

const routes = [{
        path: "/",
        name: "register",
        component: register
    },
    {
        path: "/Home",
        name: "home",
        component: Home
    },
    {
        path: "/about",
        name: "about",
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () =>
            import ( /* webpackChunkName: "about" */ "../views/About.vue")
    }
];

const router = new VueRouter({
    mode: "history",
    base: process.env.BASE_URL,
    routes
});

export default router;