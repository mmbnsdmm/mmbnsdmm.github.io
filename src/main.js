import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Lodash from 'lodash'
import Axios from 'axios'
import BootstrapVue from 'bootstrap-vue'
import MintUI from 'mint-ui'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import 'mint-ui/lib/style.css'
import 'vue-icon-font'

Vue.use(MintUI)
Vue.config.productionTip = false

new Vue({
    router,
    store,
    Lodash,
    Axios,
    BootstrapVue,
    MintUI,
    render: h => h(App)
}).$mount('#app')
