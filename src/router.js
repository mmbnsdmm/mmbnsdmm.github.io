import Vue from 'vue'
import Router from 'vue-router'
import Tools from '@/components/wodrow/Tools'

Vue.use(Router);

let routes = [
    {
        path: '/',
        name: 'home',
        component: () => import(/* webpackChunkName: "about" */ './views/site/Home.vue'),
    },
    {
        path: '/about',
        name: 'about',
        component: () => import( './views/site/About.vue'),
    },
    {
        path: '/login',
        name: 'login',
        component: () => import('./views/site/Login.vue'),
    },
    {
        path: '/signup',
        name: 'Signup',
        component: () => import('./views/site/Signup.vue'),
    },
];

const r = new Router({
    routes: routes
});

r.beforeEach(function (to, from, next) {
    if (to.path == "/logout"){
        Tools.delItem("token");
        Tools.delItem("key");
    }
    let token = Tools.getItem("token");
    let no_need_login_routes = ['/login', '/signup'];
    let to_login = false;
    if (!token){
        if (!no_need_login_routes.find(function (v) {
            return v === to.path;
        })){
            to_login = true;
        }
    }
    if (to_login){
        next('/login');
    } else {
        next();
    }
});

export default r
