import { registerApplication, start } from "single-spa";

function pathPrefix(prefix) {
    return function(location) {
        return location.pathname.startsWith(prefix);
    }
}

registerApplication(
    'navBar',
    //then将应用程序作为属性返回
    () => import('./src/navBar/navBar.app.js').then(module => module.navBar),
    //表示一直加载
    () => true
);

registerApplication(
    'home',
    // loadingFunction
    () => import('./src/home/home.app.js'),
    // activityFunction
    (       location => location.pathname === '' ||
            location.pathname === '/' ||
            location.pathname.startsWith('/home')
    )
);

registerApplication(
    'angularJS',
    () => import('./src/angularJS/angularJS.app'),
    pathPrefix('/angularJS')
);

registerApplication(
    'vue',
    () => import('./src/vue/vue.app'),
    pathPrefix('/vue')
)

start();
