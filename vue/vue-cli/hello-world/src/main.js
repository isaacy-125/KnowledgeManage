import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router';
import HelloWorld from './components/HelloWorld.vue';
import User from './components/User.vue';
import Childrens from './components/Childrens.vue';
import Children1 from './components/Children1.vue';
import store from './stores/index';

Vue.config.productionTip = false
Vue.use(VueRouter);

const router = new VueRouter({
  routes:[{
    path: '/home', component: HelloWorld,
  }, {
    path: '/user/:id', component: User,
  }, {
    path: '/childrens',
    component: Childrens,
    children: [{
      path: 'children1',
      component: Children1,
    }]
  }]
})

// 全局的路由拦截器
router.beforeEach((to, from, next) => {
  window.console.log(to, from, next);
  next();
})

// 后置的导航钩子
router.afterEach((to, from) => {
  window.console.log(to, from);
})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
