import React, { useState } from 'react';

function Index() {
    // useState初始值可以传入一个函数 返回值
    const [count, setCount] = useState(() => {
        const initState = 0;
        return initState + 1
    });
    return (
        <>
            Count: {count}
            <button
                onClick={() => {
                    setCount(0)
                }}
            >
                Reset
            </button>
            <button
                onClick={() => {
                    // setState方法第一个参数为以前的值
                    setCount(pre => pre + 1)
                }}
            >
                +
            </button>
            <button
                onClick={() => {
                    setCount(pre => pre - 1)
                }}
            >
                -
            </button>
        </>
    )
}

export default Index;
