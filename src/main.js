import Vue from 'vue'
import App from './App.vue'
import store from './store'
import router from './router'
import axios from 'axios'
import VueAxios from 'vue-axios'
import VueCookies from 'vue-cookies'
import './validate'
import BootstrapVue from 'bootstrap-vue'
import MintUI from 'mint-ui'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import 'mint-ui/lib/style.css'
import VueIconFont from 'vue-icon-font'

import Tools from '@/components/wodrow/Tools'
import Config from '@/conf/Config'

Vue.config.productionTip = false;

Vue.prototype.Tools = Tools;

Vue.use(BootstrapVue);
Vue.use(MintUI);
Vue.use(Tools);
Vue.use(VueAxios, axios);
Vue.use(VueIconFont);
Vue.use(VueCookies);

Config.getApiBaseUrl();
axios.defaults.baseURL = Config.api_base_url;
// window.console.log(Config.api_base_url);

new Vue({
    router,
    store,
    render: function(h){
        return h(App);
    }
}).$mount('#app');