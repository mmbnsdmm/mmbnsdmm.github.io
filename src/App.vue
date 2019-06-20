<template>
    <div id="app">
        <div class="header">
            <mt-header :title="title">
                <router-link to="/" slot="left">
                    <mt-button icon="back"></mt-button>
                </router-link>
                <mt-button icon="more" slot="right"></mt-button>
            </mt-header>
        </div>
        <div id="nav">
            <router-link to="/">Home</router-link>
            <router-link to="/about">About</router-link>
        </div>
        <router-view/>
    </div>
</template>

<script>
    export default {
        name: 'App',
        data: function () {
            return {
                title: 'title'
            }
        },
        mounted: function () {
            console.log(this.$db)
        }
    }
</script>

<style>
    #app {
        font-family: 'Avenir', Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
    }
</style>
