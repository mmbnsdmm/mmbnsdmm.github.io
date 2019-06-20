import Vue from 'vue'
import App from './App.vue'
import store from './store'
import router from './router'
import Lodash from 'lodash'
import Axios from 'axios'
import BootstrapVue from 'bootstrap-vue'
import MintUI from 'mint-ui'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import 'mint-ui/lib/style.css'
import 'vue-icon-font'

Vue.config.productionTip = false;

Vue.use(MintUI);

new Vue({
    router,
    store,
    Lodash,
    Axios,
    BootstrapVue,
    MintUI,
    render: function(h){
        return h(App);
    }
}).$mount('#app');
