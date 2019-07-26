import React from 'react';
import ReactDOM from 'react-dom';
import singleSpaReact from 'single-spa-react';
import Home from './root.component';

function domElementGetter() {
    return document.getElementById('home');
}

//为spa提供React生命周期钩子 用于注册single-spa应用程序
const reactLifecycles = singleSpaReact({
    React,
    ReactDOM,
    //要呈现的组件
    rootComponent: Home,
    //位置
    domElementGetter,
});

export const bootstrap = [
    reactLifecycles.bootstrap,
];

export const mount = [
    reactLifecycles.mount,
];

export const unmount = [
    reactLifecycles.unmount,
];
