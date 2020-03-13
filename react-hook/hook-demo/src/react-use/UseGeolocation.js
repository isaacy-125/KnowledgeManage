import React from 'react';
import {useGeolocation} from 'react-use';

function Index() {
    const state = useGeolocation();

    return (
        <pre>
            跟踪用户设备的地理位置状态
            {JSON.stringify(state, null, 2)}
        </pre>
    );
}

export default Index;