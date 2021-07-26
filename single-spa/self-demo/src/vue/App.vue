<template>
    <div @click="text += 1">{{ text }}</div>
</template>
<script>
    export default {
        name: 'App',
        data() {
          return {
            text: 1,
          }
        }
    }
</script>

