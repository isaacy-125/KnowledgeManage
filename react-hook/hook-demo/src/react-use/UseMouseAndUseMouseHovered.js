import React, { useRef } from 'react';
import {useMouse} from 'react-use';

export default () => {
  const ref = React.useRef(null);
  const {docX, docY, posX, posY, elX, elY, elW, elH} = useMouse(ref);

  return (
    <div style={{ background: 'green', color: 'white', marginTop: 20 }} ref={ref}>
      跟踪鼠标位置的状态
      <div>Mouse position in document - x:{docX} y:{docY}</div>
      <div>Mouse position in element - x:{elX} y:{elY}</div>
      <div>Element position- x:{posX} y:{posY}</div>
      <div>Element dimensions - {elW}x{elH}</div>
    </div>
  );
};
