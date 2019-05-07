<template>
    <div>
        <div>
            <router-link to='/foo/admin'>Go to Foo</router-link>
        </div>
        <div>
            <router-link to='/bar/2'>Go to Bar</router-link>
        </div>
        <div>
            <router-link to='/storepath'>Go to StorePath</router-link>
        </div>
        <router-view></router-view>
    </div>
</template>
<script>
export default {
    name: 'routerA'
}
</script>
<style>

</style>

