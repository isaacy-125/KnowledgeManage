import React, { useState, useContext } from 'react';

// 创建context
const CountContext = React.createContext();

function CountComponent() {
    // 通过useContext拿到全局变量
    const { count, addCount, delCount } = useContext(CountContext);
    return (
        <div>
            <button onClick={delCount}>-</button>
            <span>{count}</span>
            <button onClick={addCount}>+</button>
        </div>
    )
}

function Index() {
    const [count, setCount] = useState(0);
    const addCount = () => {
        setCount(count + 1);
    }
    const delCount = () => {
        setCount(count - 1);
    }
    return (
        // context provider 提供全局变量
        <CountContext.Provider
            value={{count, addCount, delCount}}
        >
            <CountComponent />
        </CountContext.Provider>
    );
}

export default Index;