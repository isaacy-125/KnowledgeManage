import Vue from 'vue/dist/vue.js'
import VueRouter from 'vue-router';
import Foo from './components/Foo.vue';
import Bar from './components/Bar.vue';
import StorePath from './components/StorePath.vue';

Vue.use(VueRouter);

const routes = [
    {
      path: '/foo/:username',
      component: Foo,
      beforeEnter: (to, from, next) => {
        window.console.log(to, from);
        next();
      }
  
    }, {
      path: '/bar/:id',
      component: Bar,
      children: [{
        path: 'profile',
        component: {
          template: `<div>profile</div>`
        }
      }]
    }, {
        path: '/storepath',
        component: StorePath
    }, {
      path: '*', component: {
      template: `<div>404</div>`
      }
    }
  ]
  const router = new VueRouter({
    routes // (缩写) 相当于 routes: routes
  });
  
  router.beforeEach((to, from, next) => {
    window.console.log(to, from);
    next();
  });
  
  router.afterEach((to, from) => {
    window.console.log(to, from);
  })
  export default router;