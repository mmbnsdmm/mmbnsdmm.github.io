<template>
    <div class="login">
        <mt-header :title="title">
            <router-link to="/signup" slot="right">
                <mt-button>注册</mt-button>
            </router-link>
        </mt-header>
        <div id="nav">
            <router-link to="/">Home</router-link>
            <router-link to="/about">About</router-link>
        </div>
        <div class="login-form">
            <mt-field label="用户名" name="username" placeholder="用户名" v-validate="'required'"></mt-field>
            <span>{{ errors.first('username') }}</span>
            <mt-field label="密码" placeholder="密码" type="password"></mt-field>
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
        },
    }
</script>

<style scoped>

</style>