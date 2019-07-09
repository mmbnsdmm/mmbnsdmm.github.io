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
            <mt-tab-item id="home">
                <img slot="icon" src="~@/assets/logo.png">
                首页
            </mt-tab-item>
            <mt-tab-item id="message">
                <img slot="icon" src="~@/assets/logo.png">
                消息
            </mt-tab-item>
            <mt-tab-item id="found">
                <img slot="icon" src="~@/assets/logo.png">
                发现
            </mt-tab-item>
            <mt-tab-item id="ucenter">
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
        watch: {
            selects: {
                handler: function (v) {
                    let r = "/";
                    if (v !== "home") {
                        r = r + v;
                    }
                    this.$router.push({path: r});
                }
            }
        },
        methods: {
            initWs: function () {
                if (this.Tools.getItem("token")) {
                    if ('WebSocket' in window) {
                        this.Tools.ws_io = new WebSocket("ws://127.0.0.1:9501/");
                        this.Tools.ws_io.onopen = this.wsOnOpen;
                        this.Tools.ws_io.onmessage = this.wsOnMessage;
                        this.Tools.ws_io.onerror = this.wsOnError;
                        this.Tools.ws_io.onclose = this.wsClose;
                    } else {
                        document.write('你的浏览器不支持WebSocket');
                        process.exit();
                    }
                }
            },
            wsOnMessage: function () {
                this.Tools.log("message");
            },
            wsOnOpen: function () {
                this.Tools.log("open");
            },
            wsOnError: function () {
                this.Tools.log("error");
            },
            wsClose: function () {
                this.Tools.log("close");
            }
        },
        mounted: function () {
            window.document.title = this.title;
            this.initWs();
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
            padding: 50px 15px 20px

        .footer
            height: 50px
            border-top: 1px solid #ddd
            padding-top: 0px

        .mt20
            margin-top: 20px

</style>
