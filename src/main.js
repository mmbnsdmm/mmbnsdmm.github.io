import Vue from 'vue'
import App from './App.vue'
import store from './store'
import router from './router'
import "./validate"
import axios from 'axios'
import VueAxios from 'vue-axios'
import MintUI from 'mint-ui'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import 'mint-ui/lib/style.css'
import 'vue-icon-font'

import Tools from '@/components/wodrow/Tools'
import Config from '@/conf/Config'

axios.defaults.baseURL = Config.api_base_url;

Vue.config.productionTip = false;

Vue.prototype.tools = Tools;

Vue.use(MintUI);
Vue.use(Tools);
Vue.use(VueAxios, axios);

new Vue({
    router,
    store,
    render: function(h){
        return h(App);
    }
}).$mount('#app');
