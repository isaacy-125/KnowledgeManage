<template>
    <div>foo
        <button @click='getFooParams'>get params</button>
        <button @click='goback'>go back</button>
        <button @click='goAnotherParams'>go to another params</button>
    </div>
</template>
<script>
export default {
    name: 'Foo',
    watch: {
        // 用于在同一个path下 切换不同params时的监听
        '$route'(to, from) {
            window.console.log(to, from);
        }
    },
    beforeRouteUpdate(to, from, next) {
        window.console.log(to, from);
        next();
    },
    methods: {
        getFooParams: function() {
            alert(`
                username: ${this.$route.params.username}
            `)
        },
        goback: function() {
            window.history.length > 1 ? this.$router.go(-1) : this.$router.push('/');
        },
        goAnotherParams: function() {
            this.$router.push('/foo/srmadmin');
        }
    }
}
</script>
<style>

</style>

