import React, { useState } from 'react';
import {useWindowScroll} from 'react-use';

export default () => {
  const {x, y} = useWindowScroll();

  return (
    <div style={{
      position: 'fixed',
      right: 0,
      top: 0,
      background: 'black',
      color: 'white'
    }}>
      跟踪窗口滚动位置。
      <div>x: {x}</div>
      <div>y: {y}</div>
    </div>
  );
};
