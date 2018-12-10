import * as React from 'react';
import * as ReactDom from 'react-dom';
import { Provider } from 'react-redux';
import store from './store';
import CounterComponent from './components/Counter';

ReactDom.render(
    <Provider store={store}>
        <CounterComponent name={"hello world"}/>
    </Provider>,
    document.getElementById('app')
)

console.log('hello swr');