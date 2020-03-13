import React, { useState } from 'react';
import {useScroll} from 'react-use';

export default () => {
  const scrollRef = React.useRef(null);
  const {x, y} = useScroll(scrollRef);

  return (
    <React.Fragment>
      跟踪HTML元素的滚动位置
      <div>x: {x}</div>
      <div>y: {y}</div>
      <div style={{ width: 200, height: 200, background: 'green', overflow: 'auto' }} ref={scrollRef}>
        <div style={{ width: 1000, height: 1000 }}></div>
      </div>
    </React.Fragment>
  );
};
