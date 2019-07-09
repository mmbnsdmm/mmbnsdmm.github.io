<template>
    <div class="login">
        <div class="container-fluid">
            <div class="row">
                <div class="col-12">
                    <div class="login-form">
                        <mt-field label="用户名" placeholder="用户名" name="username" v-model="username" v-validate="'required'" state=""></mt-field>
                        <mt-field label="密码" placeholder="密码" name="password" v-model="password" type="password" v-validate="'required'" state=""></mt-field>
                        <mt-button type="primary" size="large" @click="login">登录</mt-button>
                    </div>
                </div>
            </div>
        </div>
        
    </div>
</template>

<script>
import { Toast } from 'mint-ui'
export default {
    name: "Login",
    data: function(){
        return {
            title: "登录",
            username: "",
            password: ""
        };
    },
    mounted: function () {
        document.title = this.title;
        if(this.Tools.getItem("token")){
            this.$router.push({path:'/'});
        }
        this.$parent.header = {
            title: this.title,
            lto: "/",
            rto: "/signup",
            rbutton: "注册"
        };
        this.$parent.mt_tabbar_dispaly =false;
    },
    methods: {
        login: function(){
            if (!this.username){
                this.t("用户名不能为空");
                return false;
            }
            if (!this.password){
                this.t("密码不能为空");
                return false;
            }
            let _this = this;
            this.axios.get("/v2/site/user/login", {
                params: {
                    username: _this.username,
                    password: _this.password
                }
            }).then(function(response){
                if (response.data.code !== 200){
                    this.t(response.data.message);
                    return false;
                }
                _this.Tools.setItem("token", response.data.data.token);
                _this.Tools.setItem("key", response.data.data.key);
                _this.$router.push({path:'/'});
            });
        },
        t: function(msg){
            Toast({
                message: msg,
                position: 'bottom',
                duration: 2000
            });
        }
    }
}
</script>

<style scoped>

</style>