<template>
    <div class="login">
        <mt-header :title="title">
            <router-link to="/login" slot="right">
                <mt-button>登录</mt-button>
            </router-link>
        </mt-header>
        <div id="nav">
            <router-link to="/">Home</router-link>
            <router-link to="/about">About</router-link>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Login",
        data: function(){
            return {
                title: "注册",
            };
        },
        mounted: function () {
            document.title = this.title;
        },
    }
</script>

<style scoped>

</style>