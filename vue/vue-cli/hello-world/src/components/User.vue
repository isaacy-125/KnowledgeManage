<template>
    <div>
        <button
            @click="getParam"
        >
            get router params
        </button>
        <p>{{ count }}</p>
        <button
            @click="increment"
        >
            increment
        </button>
    </div>
    
</template>
<script>
import { mapGetters } from 'vuex';
export default {
    name: 'User',
    methods: {
        getParam: function() {
            window.console.log(this.$route.params);
        },
        increment: function() {
            this.$store.dispatch('user/increment');
        }
    },
    computed: {
        ...mapGetters('user', {
            count: 'getCount',
        }),
    },
    // 在进入此路由前被调用
    beforeRouteEnter(to, from, next) {
        next();
    },
    // 同一动态路由 相同组件可能会对应不同url
    // 此生命周期用于监测同一路由变化
    beforeRouteUpdate(to, from, next) {
        window.console.log(to, from, next);
        next();
    },
    // 在导航离开该组件的时候调用
    beforeRouteLeave(to, from, next) {
        next();
    }
}
</script>
<style>

</style>

