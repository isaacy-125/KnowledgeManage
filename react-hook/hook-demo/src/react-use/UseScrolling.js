import React, { useState } from 'react';
import {useScrolling} from 'react-use';

export default () => {
  const scrollRef = React.useRef(null);
  const scrolling = useScrolling(scrollRef);

  return (
    <React.Fragment>
      跟踪HTML元素是否正在滚动。
      <div>{scrolling ? "Scrolling" : "Not scrolling"}</div>
      <div style={{ width: 200, height: 200, background: 'green', overflow: 'auto' }} ref={scrollRef}>
        <div style={{ width: 1000, height: 1000 }}></div>
      </div>
    </React.Fragment>

  );
};
