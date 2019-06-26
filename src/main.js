import Vue from 'vue'
import App from './App.vue'
import store from './store'
import router from './router'
import Lodash from 'lodash'
import Axios from 'axios'
import VeeValidate from 'vee-validate'
import BootstrapVue from 'bootstrap-vue'
import MintUI from 'mint-ui'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import 'mint-ui/lib/style.css'
import 'vue-icon-font'

import Tools from '@/components/wodrow/Tools'

Vue.config.productionTip = false;

Vue.use(VeeValidate);
Vue.use(MintUI);
Vue.use(Tools);

Vue.prototype.Tools = Tools;

new Vue({
    router,
    store,
    Lodash,
    Axios,
    VeeValidate,
    BootstrapVue,
    MintUI,
    Tools,
    render: function(h){
        return h(App);
    }
}).$mount('#app');
