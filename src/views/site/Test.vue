<template>
    <div class="about">
        <h1>This is an about page</h1>
        <div id="nav">
            <router-link to="/">Home</router-link>
            <router-link to="/about">About</router-link>
        </div>
    </div>
</template>

<script>
    // @ is an alias to /src

    export default {
        name: "Test",
        mounted: function () {
            this.$nextTick(()=>{
                setTimeout(function(){
                    // Jquery('.mint-navbar>.mint-tab-item:eq(0)').trigger('click');
                }, 1000);
            });
        }
    }
</script>

<style lang="stylus">
    #app
        font-family: 'Avenir', Helvetica, Arial, sans-serif
        -webkit-font-smoothing: antialiased
        -moz-osx-font-smoothing: grayscale
        text-align: center
        color: #2c3e50
</style>