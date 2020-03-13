import React, { useState, useEffect } from 'react';
import useKey from 'react-use/lib/useKey';
import { useKeyPress } from "react-use";

const Demo = () => {
  const [count, set] = useState(0);
  const increment = () => set(count => ++count);
  useKey('ArrowUp', increment);

  return (
    <div style={{ marginTop: 20 }}>
        追踪按键<br />
      按上键累加: {count}<br />
    </div>
  );
};

export default Demo;