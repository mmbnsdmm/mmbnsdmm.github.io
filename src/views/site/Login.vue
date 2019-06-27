<template>
    <div class="login">
        <mt-header :title="title">
            <router-link to="/signup" slot="right">
                <mt-button>注册</mt-button>
            </router-link>
        </mt-header>
        <div class="content">
            <div class="container">
                <div class="row">
                    <div class="col-sm-12">
                        <div id="nav">
                            <router-link to="/">Home</router-link>
                            <router-link to="/about">About</router-link>
                        </div>
                        <div class="login-form">
                            <mt-field label="用户名" placeholder="用户名" name="username"></mt-field>
                            <mt-field label="密码" placeholder="密码" type="password"></mt-field>
                            <mt-button type="primary" size="large">登录</mt-button>
                        </div>
                    </div>
                </div>
            </div>
            
        </div>
        
    </div>
</template>

<script>
export default {
    name: "Login",
    data: function(){
        return {
            title: "登录",
        };
    },
    mounted: function () {
        document.title = this.title;
        // this.axios.get('https://mmbnsdmm.github.io/conf/config.js').then(function(response){
        //     window.console.log(response.data);
        // }).catch(function (error) {
        //     window.console.log(error);
        // });
    }
}
</script>

<style scoped>

</style>