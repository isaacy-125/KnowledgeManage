<template>
    <div>
        bar
        {{ $route.params.id }}
        <button @click='goChildren'>go to children router</button>
        <router-view></router-view>
    </div>
</template>

<script>
export default {
    name: 'bar',
    methods: {
        goChildren: function() {
            this.$router.push(`/bar/${this.$route.params.id}/profile`);
        }
    }
}
</script>

<style>

</style>
