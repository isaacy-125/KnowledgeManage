// export default () => {
//     console.log('this is b');
// }

// 以上是a模块初次点击 加载b模块 导出的一个函数

import React, { Component } from 'react';
export default class B extends Component {
    render() {
        return (
            <div>
                this is B
            </div>
        )
    }
}