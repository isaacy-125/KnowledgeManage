/*
使用react-router-cache-route解决react-router缓存问题
但是在host/:id 这种路由下 host/1 host/2按照先后顺序进入时 由于是相同类型路由 页面会缓存host/1的页面 host/2页面不会出现
引入下方的HOC方法 
keyString为同一类型路由的key值
cmp为将要渲染的组件
cacheSearch 为是否要根据不同的search url清理缓存
在autoRouter 外部定义一个组件为
import component from '..';
const WrapperComponent = createRouterWrapper(key, component, cacheSearch);

class {
    return (
        <CacheRoute
            when='always'
            component={WrapperComponent}
            path={key}
        />
    )
}
来实现上述功能

主要实现逻辑是
createRouterWrapper是返回一个tabs页面 同一类型，不同参数的路由会生成多个tabPane
根据当前的情况设置tab展示哪个tabpane

前提： 进入一个新的页面 此页面的的url信息被存入到了store 供createRouterWrapper中的tab调用
因为WapperComponent是class外部生成 不会走生命周期 只会根据不同store中的数据渲染页面
最后将tabs的样式display none掉
*/
import React, { Component } from 'react';
// import { inject, observer } from 'mobx-react';
import { withRouter } from 'react-router-dom';
import { observer } from 'mobx-react';
import { Tabs } from 'antd';
import IndexStore from 'Stores/IndexStore';

const { TabPane } = Tabs;
export default function createRouteWrapper(keyString, cmp, cacheSearch) {
    @observer
    class RouterWrapper extends Component {
        render() {
            window.console.log(IndexStore.routers);
            const currentTabs = IndexStore.routers;
            window.console.log(this.props.match.url);
            return (
                <Tabs
                    activeKey={cacheSearch ? (this.props.match.url + this.props.location.search) : this.props.match.url}
                    tabBarStyle={{
                        display: 'none'
                    }}
                // animated={false}
                >
                {
                    currentTabs
                        .filter((tab) => tab.url.startsWith(keyString))
                        .map((tab) => (
                            <TabPane
                                forceRender={false}
                                key={cacheSearch ? (tab.url + tab.search) : tab.url}
                                tab={cacheSearch ? (tab.url + tab.search) : tab.url}
                            >
                                <div>
                                    {/* style={{ width: '100%', height: 'calc(100vh - 88px)', overflow: 'hidden', position: 'relative' }} */}
                                    {React.createElement(cmp)}
                                </div>
                            </TabPane>
                        ))
                }
                </Tabs>
            );
        }
    }
return withRouter(RouterWrapper);
}

