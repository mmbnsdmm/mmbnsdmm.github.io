<script>
    export default {
        name: 'Tools',
        log: function(obj){
            window.console.log(obj);
        },
        setItem(k, v){
            localStorage.setItem(k ,JSON.stringify(v));
        },
        getItem(k){
            let v = JSON.parse(localStorage.getItem(k));
            return v;
        },
        delItem(k){
            localStorage.removeItem(k);
        }
    }
</script>

<style scoped>
</style>