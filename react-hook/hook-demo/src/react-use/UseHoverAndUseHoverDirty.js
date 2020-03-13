import React, { useRef } from 'react';
import {useHover, useHoverDirty} from 'react-use';

const Demo = () => {
  const Ref = useRef();

  const element = (hovered) =>
    <div>
      Hover me! {hovered && 'Thanks!'}
    </div>;
  const [hoverable, hovered] = useHover(element);

  const isHovering = useHoverDirty(Ref);

  return (
    <div>
        跟踪鼠标悬停某个元素的状态<br />
        useHover 设置 react onMouseEnter 和 onMouseLeave 事件, useHoverDirty 设置 DOM onmouseover 和 onmouseout 事件.
      {hoverable}
      <div>{hovered ? 'HOVERED' : ''}</div>

      <div ref={Ref}>{isHovering ? 'Dirty Hoving' : 'Dirty Not Hoving'}</div>
    </div>
  );
};

export default Demo;