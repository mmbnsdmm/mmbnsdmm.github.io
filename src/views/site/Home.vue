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
            window.document.title = this.title
            this.$parent.header = {
                title: this.title,
                to: "/logout",
                slot: "right",
                button: "注销"
            };
        },
        components: {},
    }
</script>
