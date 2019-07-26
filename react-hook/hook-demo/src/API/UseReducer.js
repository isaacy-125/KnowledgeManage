import React, { useReducer } from 'react';

function reducer(state, action) {
    switch(action.type) {
        case 'increment':
            return { count: state.count + 1 };
        case 'decrement':
            return { count: state.count - 1 };
        default:
            throw new Error();
    }
}

function Index() {
    // useReducer类似useState 有时候更适用
    // 例如state逻辑复杂或有多个子值 或者新state依赖于旧state
    const [state, dispatch] = useReducer(reducer, { count: 0 })
    return (
        <>
            Count: { state.count }
            <button onClick={() => dispatch({ type: 'increment' })}>+</button>
            <button onClick={() => dispatch({ type: 'decrement' })}>-</button>
        </>
    );
}

export default Index;