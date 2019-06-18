import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
      user: {
          id: null,
          username: null
      },
      meta: {
          title: "首页",
          keywords: "关键字",
          description: "描述"
      }
  },
  mutations: {

  },
  actions: {

  }
})
