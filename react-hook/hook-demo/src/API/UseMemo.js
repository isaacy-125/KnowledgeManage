import React, { useState, useEffect, useCallback, useMemo } from 'react';


function Index() {
    const [memoCount, setMemoCount] = useState(0);

    useMemo(() => {
        console.log('memoCount:',memoCount);
    }, [memoCount]);

    return (
        <>
            { memoCount }
            <button onClick={() => setMemoCount(memoCount + 1)}>
                change memoCount
            </button>
        </>
    );
}

export default Index;