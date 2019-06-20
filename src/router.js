import Vue from 'vue'
import Router from 'vue-router'

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
    let token = localStorage.token;
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
