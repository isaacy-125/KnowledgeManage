// plan是自定义的状态改变函数
// initState为初始化state
const createStore = function (reducer, initState) {
    let state = initState;
    // 初始化监听器
    let listeners = [];

    // 订阅方法 增加监听器
    function subscribe(listener) {
        listeners.push(listener);
    }

    // 改变状态方法
    function dispatch(action) {
        state = reducer(state, action);
        // 并分发调用监听器
        listeners.forEach((l) => {
            l();
        });
    }

    // 拿取状态函数
    function getState() {
        return state;
    }

    // 使用不匹配任务type 来初始化state
    dispatch({ type: Symbol() })

    // 暴露方法
    return {
        subscribe,
        dispatch,
        getState
    }
}

// 合并reducer方法
function combineReducers(reducers) {
    const reducerKeys = Object.keys(reducers); // [counter, info]
    return function combination(state = {}, action) {
        const nextState = {};
        reducerKeys.forEach((key) => { // counter
            const reducer = reducers[key]; // counterReducer[func]
            const previousStateForKey = state[key];
            const nextStateForKey = reducer(previousStateForKey, action);
            nextState[key] = nextStateForKey;
        })
        return nextState;
    }
}

function applyMiddleware(...middlewares) {
    return function rewriteCreateStoreFunc(oldCreateStore) {
        return function newCreateStore(reducer, initState) {
            const store = oldCreateStore(reducer, initState);
            const chain = middlewares.map(middleware => middleware(store));
            let dispatch = store.dispatch;
            /* 实现 exception(time((logger(dispatch))))*/
            chain.reverse().map(middleware => {
                dispatch = middleware(dispatch);
            });
            /*2. 重写 dispatch*/
            store.dispatch = dispatch;
            return store;
        }
    }
}

module.exports = {
    createStore,
    combineReducers,
    applyMiddleware
}
