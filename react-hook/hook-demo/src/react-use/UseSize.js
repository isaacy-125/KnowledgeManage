import React, { useState, useRef } from 'react';
import {useSize, useHover} from 'react-use';

export default () => {
  const Ref = useRef();

  const element = (hovered) => (
    <div style={{
      background: 'red',
      width: hovered ? '100%' : '100px',
      height: hovered ? '100px' : '20px',
      transition: 'all 2s ease 0s',
    }}>Size me up!</div>
  );

  const [hoverable] = useHover(element);

  const [sized, {width, height}] = useSize(
    ({width}) => hoverable,
    { width: 100, height: 100 }
  );

  return (
    <div>
      跟踪HTML元素的大小。
      {sized}
      <div>width: {width}</div>
      <div>height: {height}</div>
    </div>
  );
};
