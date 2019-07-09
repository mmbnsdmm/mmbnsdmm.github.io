<template>
    <div class="message">
        <b-row>
            <b-col cols="12">
                <b-tabs>
                    <b-tab title="Tab 1" active>
                        <mt-index-list>
                            <mt-index-section index="A">
                                <mt-cell title="Aaron"></mt-cell>
                                <mt-cell title="Alden"></mt-cell>
                                <mt-cell title="Austin"></mt-cell>
                            </mt-index-section>
                            <mt-index-section index="B">
                                <mt-cell title="Baldwin"></mt-cell>
                                <mt-cell title="Braden"></mt-cell>
                            </mt-index-section>
                            <mt-index-section index="Z">
                                <mt-cell title="Zack"></mt-cell>
                                <mt-cell title="Zane"></mt-cell>
                            </mt-index-section>
                        </mt-index-list>
                    </b-tab>
                    <b-tab title="Tab 2">
                        <mt-index-list>
                            <mt-index-section index="A">
                                <mt-cell title="Aaron"></mt-cell>
                                <mt-cell title="Alden"></mt-cell>
                                <mt-cell title="Austin"></mt-cell>
                            </mt-index-section>
                            <mt-index-section index="B">
                                <mt-cell title="Baldwin"></mt-cell>
                                <mt-cell title="Braden"></mt-cell>
                            </mt-index-section>
                            <mt-index-section index="Z">
                                <mt-cell title="Zack"></mt-cell>
                                <mt-cell title="Zane"></mt-cell>
                            </mt-index-section>
                        </mt-index-list>
                    </b-tab>
                </b-tabs>
            </b-col>
        </b-row>
    </div>
</template>

<script>
    export default {
        name: "Message",
        data: function(){
            return {
                title: "消息",
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
            this.$parent.selects = "message";
            this.$parent.mt_tabbar_dispaly =true;
        },
    }
</script>

<style scoped>

</style>