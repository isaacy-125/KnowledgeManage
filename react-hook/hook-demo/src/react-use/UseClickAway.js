import React, { useState, useRef } from 'react';
import {useClickAway} from 'react-use';

export default () => {
  const [clickoutSide, setClickoutSide] = useState(false);

  const ref = useRef(null);
  useClickAway(ref, () => {
    setClickoutSide(true);
  });

  return (
    <div style={{ marginTop: 30 }}>
      当用户在目标区域之外单击时触发回调
      <div onClick={() => setClickoutSide(false)} ref={ref} style={{
        width: 200,
        height: 200,
        background: 'red',
      }}>
        {clickoutSide ? '点击了外部' : '点击了内部'}
      </div>
    </div>
  );
};
