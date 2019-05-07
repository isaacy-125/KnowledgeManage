import Vue from 'vue/dist/vue.js'
// import App from './App.vue'
import RouterA from './components/RouterA.vue';
import router from './router';
import store from './store';

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(RouterA),
}).$mount('#app')
