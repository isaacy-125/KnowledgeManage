import React from 'react';
import {useIdle} from 'react-use';

const Demo = () => {
  const isIdle = useIdle(3e3);

  return (
    <div style={{ marginTop: 10 }}>
        跟踪用户是否处于非活动状态。
      <div>User is idle: {isIdle ? 'Yes 😴' : 'Nope'}</div>
    </div>
  );
};

export default Demo;