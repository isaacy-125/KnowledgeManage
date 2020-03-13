import React from 'react';
import { useBattery } from 'react-use';

function Index() {
    const state = useBattery();
    return (
        <pre>
            跟踪设备电池状态
            {JSON.stringify(state, null, 2)}
        </pre>
    )
}

export default Index;