import React, { useEffect, useState, useCallback, useMemo, use } from 'react';

function Child({ callback }) {
    const [count, setCount] = useState(() => callback());    
    useEffect(() => {
        setCount(callback())
    }, [callback])
    return (
        <>
            {count}
        </>
    )
}

function Parent() {
    const [data, setData] = useState(1);
    const callback = useCallback(() => {
        console.log('here');
        return data;
    }, [data])
    return (
        <>
            <Child callback={callback} />
            <button onClick={() => setData(data + 1)}>+</button>
        </>
    )
}

// useMemo返回缓存的变量，useCallback返回缓存的函数
function Index() {
    const [ count, setCount ] = useState(1);
    const [ val, setVal ] = useState('');
    const expensiveCount = useMemo(() => {
        console.log('expensiveCount');
        let sum = 0;
        for (let i = 0; i < count * 100; i ++) {
            sum += 1;
        }
        return sum;
    }, [count]);
    return (
        <div>
            <h4>
                {count}-{val}-{expensiveCount}
            </h4>
            <div>
                <button onClick={() => setCount(count + 1)}>+1 Count</button>
                <input value={val} onChange={e => setVal(e.target.value)} type="text"/>
            </div>
            <Parent/>
        </div>
    )
}

export default Index;
