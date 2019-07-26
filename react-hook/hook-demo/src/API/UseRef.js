import React, { useRef, useLayoutEffect } from 'react';

function Index() {
    const inputEl = useRef(null);

    useLayoutEffect(() => {
        inputEl.current.focus();
    }, []);

    return (
        <>
            <input ref={inputEl} type="text" />
            {/* <button onClick={() => inputEl.current.focus()}>focus</button> */}
        </>
    );
}

export default Index;