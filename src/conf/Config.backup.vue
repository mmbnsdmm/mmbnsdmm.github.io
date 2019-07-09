<script>
import axios from 'axios'
import { Toast } from 'mint-ui'

export default {
    name: "Config",
    get_api_base_url_url: "https://mmbnsdmm.github.io/io/config.dev.json",
    api_base_url: window.sessionStorage.api_base_url,
    getApiBaseUrl: function(){
        if (!window.sessionStorage.api_base_url){
            let _this = this;
            axios.get(_this.get_api_base_url_url).then(function(response){
                if (response.status !== 200){
                    Toast({
                        message: '获取base_url失败',
                        position: 'bottom',
                        duration: 2000
                    });
                }else{
                    window.sessionStorage.api_base_url = response.data.xuba_api_base_url;
                }
            });
            _this.api_base_url = window.sessionStorage.api_base_url;
        }
    },
    no_need_login_routes: ['/login', '/signup']
}
</script>
