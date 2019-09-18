let { createStore, combineReducers, applyMiddleware } = require('./index');

// 初始化countstate
let initCount = {
    count: 0
}
// 创建一个Reducer
// 接收的state是state.counter
function counterReducer(state, action) {
    if (!state) {
        state = initCount
    }
    switch (action.type) {
        case 'INCREMENT':
            return {
                count: state.count + 1,
            }
        case 'DECREMENT':
            return {
                count: state.count - 1,
            }
        default:
            return state;
    }
}

let initInfo = {
    name: '前端九部',
    description: '我们都是前端爱好者！'
}

// 接收的state是state.info
function InfoReducer(state, action) {
    if (!state) {
        state = initInfo
    }
    switch (action.type) {
        case 'SET_NAME':
            return {
                ...state,
                name: action.name
            }
        case 'SET_DESCRIPTION':
            return {
                ...state,
                description: action.description,
            }
        default:
            return state;
    }
}

const reducer = combineReducers({
    counter: counterReducer,
    info: InfoReducer
  });

function loggerMiddleware(store) {
    return function (next) {
        return function(action) {
            console.log('this state', store.getState());
            console.log('action', action);
            next(action);
            console.log('next state', store.getState());
        }
    }
}

// dispatch时的异常处理中间件
function exceptionMiddleware(store) {
    return function (next) {
        return function (action) {
            try {
                next(action);
            } catch (err) {
                console.log('错误报告', err);
            }
        }
    }
}
//初始化store
const newCreateStore = applyMiddleware(exceptionMiddleware, loggerMiddleware)(createStore);
let store = newCreateStore(reducer);
const next = store.dispatch;

store.subscribe(() => {
    let state = store.getState();
    console.log(state);
});

// dispatch时打印state的变化中间件


// const logger = loggerMiddleware(store);
// const exception = exceptionMiddleware(store);
// store.dispatch = exception(logger(next));

store.dispatch({
    type: 'INCREMENT'
});
// store.dispatch({
//     type: 'SET_NAME',
//     name: '前端九部2号'
// });