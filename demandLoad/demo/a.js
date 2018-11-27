// import b from './b';
// console.log('this is a.js');
// const btn = document.querySelector('#btn');
// btn.onclick = () => {
//     // 按需加载 运行到这 才会加载b文件的js
//     // 这里的注释是为按需加载的模块命名
//     import(/* webpackChunkName: "b" */'./b').then(function(module) {
//         const b = module.default;
//         b();
//     })
// }

// 以上是点击按钮按需加载B模块
// 热更新
if (module.hot) {
    module.hot.accept();
}

import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import ReactDom from 'react-dom';
import Loadable from 'react-loadable';
// import B from './b';

const Loading = () => <div>Loading...</div>

// 异步加载组件
const B = Loadable({
    loader: () => import('./b'),
    loading: Loading,
})

export default class A extends Component {
    render() {
        return (
            <div>
                <Router>
                    <div>
                        <Route path="/B" component={B}/>
                        <Link to="/B">to B</Link><br/>
                    </div>
                </Router>
            </div>
        )
    }
}
ReactDom.render(<A />, document.querySelector('#btn'))

