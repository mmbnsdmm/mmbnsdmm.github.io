<template>
    <div class="login">
        <mt-header :title="title">
            <router-link to="/login" slot="right">
                <mt-button>登录</mt-button>
            </router-link>
        </mt-header>
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
        if(window.localStorage.token){
            this.$router.push({path:'/'});
        }
        this.$parent.header = {
            title: this.title,
            lto: "/",
            rto: "/login",
            rbutton: "登录"
        };
        this.$parent.mt_tabbar_dispaly =false;
    },
}
</script>

<style scoped>

</style>