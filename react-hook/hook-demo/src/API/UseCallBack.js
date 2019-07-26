import React, { useState, useCallback } from 'react';

function Index() {
    const [data, setData] = useState(0);

    // useCallback 会记录下记忆值
    // 如果写入第二个参数 则会参数改变 再次更新
    const memoizedCallback = useCallback(
        () => {
            return data;
        }, []
    )
    console.log('记忆data:', memoizedCallback());
    console.log('新data:', data);
    return (
        <div>
            data: { data }
            <button onClick={() => { setData(data + 1) }}>+</button>
            <button onClick={() => { setData(data - 1) }}>-</button>
        </div>
    );
}

export default Index;