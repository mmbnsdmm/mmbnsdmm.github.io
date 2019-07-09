<template>
    <div class="home">
        <b-row>
            <b-col cols="6">
                123
            </b-col>
            <b-col cols="6">
                123
            </b-col>
        </b-row>
        <hr>
        <hr>
        <hr>
        <hr>
        <hr>
        <hr>
        <hr>
        <hr>
        <hr>
        <hr>
        <hr>
        <hr>
        <hr>
        <hr>
        <hr>
        <hr>
        <hr>
        <hr>
        <hr>
        <hr>
        <hr>
        <hr>
        <hr>
        <hr>
        <hr>
        <hr>
        <hr>
        <hr>
        <hr>
        <hr>
        <hr>
        <hr>
        <hr>
        <hr>
        <hr>
        <hr>
        <hr>
        <hr>
        <hr>
        <hr>
        <hr>
        <hr>
        <hr>
        <hr>
        <hr>
        <hr>
        <hr>
        <hr>
        <hr>
        <hr>
        <hr>
        <hr>
        <hr>
        <hr>
        <hr>
        <hr>
        <hr>
        <hr>
        <hr>
        <hr>
        <hr>
        <hr>
        <hr>
        <hr>
        <hr>
        <hr>
        <hr>
        <hr>
        <hr>
        <hr>
        <hr>
        <hr>
        <hr>
        <hr>
        <hr>
        <hr>
        <hr>
        <hr>
        <hr>
        <hr>
    </div>
</template>

<script>
    export default {
        name: 'Home',
        data: function(){
            return {
                title: "首页"
            }
        },
        mounted: function(){
            window.document.title = this.title;
            this.$parent.header = {
                title: this.title,
                lto: "/",
                rto: "/logout",
                rbutton: "注销"
            };
            this.$parent.mt_tabbar_dispaly =true;
        },
        components: {},
    }
</script>
