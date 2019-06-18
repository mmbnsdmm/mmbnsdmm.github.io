import Vue from 'vue'
import Router from 'vue-router'
// import Lodash from 'lodash'
// import store from './store'

Vue.use(Router)

let routes = [
    {
        path: '/',
        name: 'home',
        meta: {title:'首页',keyword:'success-list',description:'维修工列表'},
        component: () => import(/* webpackChunkName: "about" */ './views/Home.vue')
    },
    {
        path: '/about',
        name: 'about',
        meta: {title:'about',keyword:'success-list',description:'维修工列表'},
        component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    }
];

const route = new Router({
    routes: routes
})

route.beforeEach(function (to, from, next) {
    document.title = to.meta.title
    next()
})

export default route
