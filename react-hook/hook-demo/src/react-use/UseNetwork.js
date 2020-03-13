import React from 'react';
import {useNetwork} from 'react-use';

export default () => {
  const state = useNetwork();

  return (
    <pre>
      跟踪用户的互联网连接状态
      {JSON.stringify(state, null, 2)}
    </pre>
  );
};
