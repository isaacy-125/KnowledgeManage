import React, { useState } from 'react';
import {useStartTyping} from 'react-use';

export default () => {
  const [typing, setTyping] = useState(false);

  useStartTyping(() => setTyping(true));

  return (
    <div style={{ marginTop: 20 }}>
      检测用户何时开始输入。
      {typing && '开始输入'}
    </div>
  );
};
