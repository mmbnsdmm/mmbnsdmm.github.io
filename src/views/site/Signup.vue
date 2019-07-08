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
            to: "/login",
            slot: "right",
            button: "登录"
        };
    },
}
</script>

<style scoped>

</style>