<template>
    <div id="app">
        <div class="wrap">
            <div id="nav">
                <mt-header :title="header.title" fixed>
                    <router-link :to="header.lto" slot="left">
                        <mt-button icon="back"></mt-button>
                    </router-link>
                    <router-link :to="header.rto" slot="right">
                        <mt-button>{{header.rbutton}}</mt-button>
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
        <mt-tabbar v-model="selects" fixed v-show="mt_tabbar_dispaly">
            <mt-tab-item id="外卖">
                <img slot="icon" src="~@/assets/logo.png">
                首页
            </mt-tab-item>
            <mt-tab-item id="订单">
                <img slot="icon" src="~@/assets/logo.png">
                消息
            </mt-tab-item>
            <mt-tab-item id="发现">
                <img slot="icon" src="~@/assets/logo.png">
                发现
            </mt-tab-item>
            <mt-tab-item id="我的">
                <img slot="icon" src="~@/assets/logo.png">
                我的
            </mt-tab-item>
        </mt-tabbar>
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
                    lto: "/",
                    rto: "/logout",
                    rbutton: "注销"
                },
                mt_tabbar_dispaly: true,
                selects: ""
            }
        },
        mounted:function () {
            window.document.title = this.title;
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
        margin: 0 auto -50px
        padding: 0 0 50px

    .wrap > .container
        padding: 70px 15px 20px

    .footer
        height: 50px
        border-top: 1px solid #ddd
        padding-top: 0px

    .mt20
        margin-top: 20px

</style>
