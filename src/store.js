import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

const v = new Vuex.Store({
    state: {
        user: {
            id: null,
            username: null
        },
        meta: {
            title: "首页",
            keywords: "续吧 故事汇 YY故事汇",
            description: "描述"
        }
    },
    mutations: {},
    actions: {}
});

export default v;
