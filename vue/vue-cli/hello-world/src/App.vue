<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <br />
    <router-link to="/">go index</router-link>
    <br />
    <router-link to="/home">go home</router-link>
    <br />
    <router-link to="/user/1">go user 1</router-link>
    <br />
    <router-link to="/user/2">go user 2</router-link>
    <br />
    <router-link to="/childrens">go childrens</router-link>
    <div>
      <button
       @click="goHome"
      >
        go home
      </button>
    </div>
    <div class="borderClass" />
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <router-view></router-view>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue';

export default {
  name: 'app',
  components: {
    HelloWorld
  },
  mounted() {
    // setTimeout访问this 会指向window 用箭头函数可以去到实例this
    setTimeout(() => {
      window.console.log(this);
    }, 1000)
  },
  methods: {
    goHome: function() {
      this.$router.push('/home');
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.borderClass {
  width: 100%;
  height: 2px;
  background: black;
}
</style>
