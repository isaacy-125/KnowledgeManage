import React, { useState } from 'react';
import {useMeasure} from 'react-use';

export default () => {
  const [ref, { x, y, width, height, top, right, bottom, left }] = useMeasure();

  return (
    <div ref={ref} style={{ marginTop: 20, background: 'gainsboro' }}>
      使用Resize Observer API跟踪HTML元素的尺寸。
      <div>x: {x}</div>
      <div>y: {y}</div>
      <div>width: {width}</div>
      <div>height: {height}</div>
      <div>top: {top}</div>
      <div>right: {right}</div>
      <div>bottom: {bottom}</div>
      <div>left: {left}</div>
    </div>
  );
};
