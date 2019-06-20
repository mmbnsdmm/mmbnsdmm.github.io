import Vue from 'vue'
import Router from 'vue-router'
import Lodash from 'lodash'
import store from './store'

Vue.use(Router);

let routes = [
    {
        path: '/',
        name: 'home',
        meta: {title:'续吧',keywords:'续吧 故事汇 YY故事汇',description:'续吧'},
        component: () => import(/* webpackChunkName: "about" */ './views/site/Home.vue'),
    },
    {
        path: '/about',
        name: 'about',
        meta: {title:'关于-续吧',keywords:'续吧 故事汇 YY故事汇',description:'续吧'},
        component: () => import( './views/site/About.vue'),
    },
    {
        path: '/login',
        name: 'login',
        meta: {title:'登录-续吧',keywords:'续吧 故事汇 YY故事汇',description:'续吧'},
        component: () => import('./views/site/Login.vue'),
    },
];

const r = new Router({
    routes: routes
});

r.beforeEach(function (to, from, next) {
    document.title = to.meta.title;
    let user = store.state.user;
    let no_need_login_routes = ['/login', '/signup'];
    if (!user.id){
        Lodash.forEach(no_need_login_routes ,function (v) {
            if (v !== to.path){
                next('/login');
            }
        })
    }
    next()
});

export default r
