## Single-spa 是一个将多个单页面应用聚合为一个整体应用的 javascript 微前端框架。 使用 single-spa 进行前端架构设计可以带来很多好处
- 在同一页面上使用多个前端框架 而不用刷新页面
(React, AngularJS, Angular, Ember, 你正在使用的框架)
- 独立部署每一个单页面应用
- 新功能使用新框架，旧的单页应用不用重写可以共存

## 微前端
- 微前端作为用户界面的一部分，通常由许多组件组成，并使用类似于React、Vue和Angular等框架来渲染组件。每个微前端可以由不同的团队进行管理，并可以自主选择框架。
- 每个微前端都拥有独立的git仓库、package.json和构建工具配置。因此，每个微前端都拥有独立的构建进程和独立的部署/CI。

## single-spa配置
- 为所有应用共享的根HTML文件
- 为每个模块注册应用服务single-spa.registerApplication()

####在single-spa上注册应用程序是必须的，以便它知道如何以及何时启动，加载，安装和卸载。
一般注册应用服务看起来是这样的
```
import { registerApplication, start } from "single-spa";

registerApplication(
    'vue',
    () => import('./src/vue/vue.app'),
    pathPrefix('/vue')
)

start();
```
- 第一个参数是应用服务的名称
- 第二个是返回一个加载函数或者已解析的application的promise对象

    如果是使用解析的application，application是由带有生命周期方法的对象组成。
    ```
    const application = { 
      bootstrap: ()=> promise.resolve()，//引导功能    
      mount ：（）=> promise.resolve （），//安装函数    
      unmount：（）=> promise.resolve （），//卸载功能    
    }
    registerApplication （'applicatonName' ，application ，activityFunction ）
    ```
- 第三个参数是路由匹配机制，通过window.location判断哪个应用程序应该处于活跃状态

注册的应用会经过下载(loaded)、初始化(initialized)、被挂载(mounted)、卸载(unmounted)和unloaded（被移除）等过程。single-spa会通过“生命周期”为这些过程提供钩子函数

- 初始化 这个生命周期函数会在应用第一次挂载前执行一次。
     ```
      export function bootstrap(props) {
        return Promise
          .resolve()
          .then(() => {
            // One-time initialization code goes here
            console.log('bootstrapped!')
          });
      }
     ```
- 挂载 当注册应用的第三个参数 及路由匹配返回true时 挂载的生命周期会开始调用，函数会根据URL来确定当前被激活的路由，创建DOM元素、监听DOM事件等以向用户呈现渲染的内容
    ```
    export function mount(props) {
      return Promise
        .resolve()
        .then(() => {
          // Do framework UI rendering here
          console.log('mounted!')
        });
    }
    ```
  
- 卸载 当注册应用的第三个参数返回true 并且应用已挂载时触发，卸载函数被调用时，会清理在挂载应用时被创建的DOM元素、事件监听、内存、全局变量和消息订阅等
    ```
    export function unmount(props) {
      return Promise
        .resolve()
        .then(() => {
          // Do framework UI unrendering here
          console.log('unmounted!');
        });
    }
    ```
  
## 生态系统

### React

#### single-spa-react

single-spa-react 是一个辅助库，它可以帮助React应用程序实现single-spa 需要的命周期函数（bootstrap、mount 和 unmount)
```
npm install --save single-spa-react
# Or
yarn add single-spa-react
```
在入口文件中引入single-spa-react,这样你的应用程序就可以把它作为浏览器内的ES模块下载
```
import React from 'react';
import ReactDOM from 'react-dom';
import rootComponent from './path-to-root-component.js';
// 注意 Singlespacontext 是一个为react@16.3(如果可用的话)提供的上下文，包含了 singleSpa props
import singleSpaReact, {SingleSpaContext} from 'single-spa-react';
const reactLifecycles = singleSpaReact({
  React,
  ReactDOM,
  rootComponent,
  errorBoundary(err, info, props) {
    // https://reactjs.org/docs/error-boundaries.html
    return (
      <div>This renders when a catastrophic error occurs</div>
    );
  },
});
export const bootstrap = reactLifecycles.bootstrap;
export const mount = reactLifecycles.mount;
export const unmount = reactLifecycles.unmount;
```

### Vue
#### single-spa-vue
single-spa-vue是一个针对vue项目的初始化、挂载、卸载的库函数，可以实现single-spa注册的应用、生命周期函数等功能
```
import './set-public-path';
import Vue from 'vue';
import App from './App.vue';
import router from './router';
import singleSpaVue from 'single-spa-vue';
const vueLifecycles = singleSpaVue({
  Vue,
  appOptions: {
    render: h => h(App),
    router,
  },
});
export const bootstrap = vueLifecycles.bootstrap;
export const mount = vueLifecycles.mount;
export const unmount = vueLifecycles.unmount;
```
### AngularJS
#### single-spa-angularjs

```
import singleSpaAngularJS from 'single-spa-angularjs';
import angular from 'angular';
const ngLifecycles = singleSpaAngularJS({
  angular: angular,
  mainAngularModule: 'app',
  uiRouter: true,
  preserveGlobal: false,
  template: '<my-component />',
});
export const bootstrap = ngLifecycles.bootstrap;
export const mount = ngLifecycles.mount;
export const unmount = ngLifecycles.unmount;
```
