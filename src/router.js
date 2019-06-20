import Vue from 'vue'
import Router from 'vue-router'
// import Lodash from 'lodash'
// import store from './store'

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
        component: () => import(/* webpackChunkName: "about" */ './views/site/About.vue'),
    }
];

const r = new Router({
    routes: routes
});

r.beforeEach(function (to, from, next) {
    document.title = to.meta.title;
    next()
});

export default r
