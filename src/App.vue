<template>
    <div id="app">
        <div class="wrap">
            <div id="nav">
                <mt-header :title="header.title" fixed>
                    <router-link :to="header.to" :slot="header.slot">
                        <mt-button>{{header.button}}</mt-button>
                    </router-link>
                </mt-header>
            </div>
            <b-container>
                <router-view/>
            </b-container>
        </div>
        <footer class="footer">
            <div class="container">
                <p class="pull-left">{{copyright}}</p>
            </div>
        </footer>
    </div>
</template>

<script>
    export default {
        name: 'App',
        data: function () {
            return {
                title: "首页",
                copyright: "© vuecli3.0 | © vue-bootstrap",
                tttt: "test0",
                header: {
                    title: this.title,
                    to: "/logout",
                    slot: "right",
                    button: "注销"
                }
            }
        },
        mounted:function () {
            window.document.title = this.title
        }
    }
</script>

<style lang="sass">
    html, body, #app
        height: 100%
        /*background: url("~@/assets/bg1.gif") repeat*/

    p
        text-indent: 2em

    .wrap
        min-height: 100%
        height: auto
        margin: 0 auto -60px
        padding: 0 0 60px

    .wrap > .container
        padding: 70px 15px 20px

    .footer
        height: 60px
        border-top: 1px solid #ddd
        padding-top: 20px

    .mt20
        margin-top: 20px

</style>
